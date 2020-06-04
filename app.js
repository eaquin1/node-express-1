const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.post("/", async function (req, res, next) {
    try {
        let calls = req.body.developers.map(async (d) => {
            return await axios.get(`https://api.github.com/users/${d}`);
        });

        let results = await Promise.all(calls).then((dev) =>
            dev.map((r) => ({ name: r.data.name, bio: r.data.bio }))
        );

        return res.send(results);
    } catch (err) {
        next(err);
    }
});

//error handler
app.use(function (err, req, res, next) {
    //the default is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;

    //set status and alert the user
    return res.status(status).json({
        error: { message, status },
    });
});
module.exports = app;
