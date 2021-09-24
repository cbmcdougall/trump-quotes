
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const quotes = require("./quotes.json")




async function getQuote(){
    const quote = quotes[Math.floor(Math.random()*quotes.length)];
    const json = JSON.stringify({quote:quote});

    return new Response(json, )
}


app.get('/', (req, res) => {
    res.json({message: 'Hello World!'})
});

app.listen(port, () => {
    console.log(`Express recently departed from port ${port}`)
  });

module.exports = app;
