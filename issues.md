# Broken App Issues

- Change top variables to const from var or let
- Change app.listen to a callback, and move it to server.js. Export app from app.js
- const app = express(); is missing
- need to tell all routes to recognize any incoming request as a JSON object with app.use(express.json())
- catch needs (err)
- add Promise.all to make all calls, and .then() is needed to pass response on
- add error handling middleware to handle the next ()
