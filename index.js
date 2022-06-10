const express = require('express');
const app = express();
const port = 1000

const { chromium } = require("playwright-chromium");

// express Settings
app.get('/', function (req, res) {
    console.log('This is a Console Log');
    (async () => {
        const browser = await chromium.launch({ chromiumSandbox: false });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('http://whatsmyuseragent.org/');
        console.log(' chromium Started');
        await browser.close();
        console.log(' chromium Ended');
      })();
    res.send('Handelsregister-Scraper started!')
})

app.listen(process.env.PORT || 1000, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`)
})