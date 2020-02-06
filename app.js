const express = require('express')
const moment = require('moment')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/api/timestamp/:date_string?', (req, res) => {

    let date_string = req.params.date_string.slice(1);


    let unix, utc;

    if (isNaN(date_string)) {
        let d = new Date(date_string);
        unix = d.getTime();    // milliseconds
        utc = d.toUTCString()   // utc
    } else {
        let k = Number(date_string);
        let d = new Date(k);
        unix = k;                // milliseconds
        utc = d.toUTCString()    // utc
    }


    // JSON object
    let myData = {
        "unix": unix,
        "utc": utc
    }
    res.json(myData);
})

let port = process.env.port || 3000;
app.listen(port)