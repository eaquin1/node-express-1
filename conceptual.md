### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
JS uses three methods for handling asynchronous code: callbacks, which allow you to provide functions to call once the asynchronous method has finished running; promises, which allow you to chain methods together; and async/await, which is syntactic sugar over promises.

- What is a Promise?
A promise is a one-time guarantee of a future value. They are objects in JS. They are native to JS as of ES2015. A promise can be in one of three states: Pending (it doesn't yet have a value), Resolved(it has successfully obtained a value), and Rejected(it failed to obtain a value). The only way to access the resolved or rejected value is to chain a method on the end of the promise.

- What are the differences between an async function and a regular function?
In a regular function, things happen one at a time. When you call a function that performs a long-running action, it returns only when the action is finished. This stops your program for the time the action takes. An async function allows multiple things to happen at the same time. When you start an action, your program continues to run. When the action finishes, the program is informed and gets access to the result.

- What is the difference between Node.js and Express.js?
Node.js is a JS environment that runs server-side. It can be used to create server-side JS but it can also be a general-purpose scripting language. Express.js is a minimalist framework, similar to Flask, and is the most popular framework in the Node ecosystem.

- What is the error-first callback pattern?
The first argument of the callback is reserved for an error object. The second argument of the callback is reserved for any successful response data. If no error occurred, err will be set to null and any successful data will be returned in the second argument. 

- What is middleware?
It is code that runs in the middle of the request/response cycle. In Express, middleware are functions that get access to the req and res objects and can also call the next function. express.json() is an example of middleware. You would use it in cases such as, logging useful information on every request, adding a current_user for every request, ensuring that users are authenticated, or ensuring that a user is authorized to access an endpoint.

- What does the `next` function do?
It tells the request to move to the next route. If we didn't include it, we wouldn't make it to the next route.

- What does `RETURNING` do in SQL? When would you use it?
RETURNING is used to immediately terminate the procedure. You use it when you don't want to move on to other code.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
This code would run slowly because it is making 3 separate requests that stop and wait until the response has been received. A faster way would be to use Promise.all to await multiple resolved promises.
The code should also have some error handling, in case one or more of the API calls are rejected.