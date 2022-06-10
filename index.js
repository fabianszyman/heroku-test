const express = require('express');
const app = express();
const port = 1000

// express Settings
app.get('/', function (req, res) {
    console.log('This is a Console Log');
    res.send('Handelsregister-Scraper started!')
})

app.listen(process.env.PORT || 1000, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`)
})