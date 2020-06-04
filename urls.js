const fs = require("fs");
const axios = require("axios");

path = process.argv[2];

/* Returns an array of URLS, or quits process if there was an error opening the file */
function readFile(path) {
    fs.readFile(path, "utf8", function (err, data) {
        if (err) {
            console.log(`Error reading ${path}: \n${err}`);
            process.exit(1);
        } else {
            data = data.trim();
            data = data.split("\n");

            requestURL(data);
        }
    });
}

/* Make a GET request for each URL, and save the HTML in a new file */

async function requestURL(paths) {
    for (i of paths) {
        try {
            let p = await axios.get(i);
            let l = new URL(i);
            fs.writeFile(l.hostname, p.data, "utf8", (err) => {
                if (err) {
                    console.log(`Couldn't write to ${i}: ${err}`);
                }
                console.log(`Wrote to ${l.hostname}`);
            });
        } catch (e) {
            console.log(`Couldn't download ${i}.`);
        }
    }
}

readFile(path);
