const express = require('express');
const app = express();

// express Settings
app.get('/', function (req, res) {
    console.log('This is a Console Log');
    res.send('Handelsregister-Scraper started!')
})

app.listen(process.env.PORT || 1000, '0.0.0.0', () => {
    console.log("Handelsregister Scraper can be started on Port 4000.");
})