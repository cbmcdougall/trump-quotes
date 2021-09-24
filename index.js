
const express = require('express');
const quotes = require('./quotes.json');
const app = express();
const port = process.env.PORT || 3000;
// const quotes = require("./quotes.json")




async function getQuote(){
    const quote = quotes[Math.floor(Math.random()*quotes.length)];
    const json = JSON.stringify({quote:quote});

    return new Response(json, )
}


app.use(express.json());

app.get('/:word', (req,res) => {
    // String.includes() is case-sensitive, hence converting everything to lowerCase when searching
    let requestedWord = req.params.word.toLowerCase();
    const matchedQuotes = quotes.filter(quote => quote.toLowerCase().includes(requestedWord));
    const returnQuote = matchedQuotes[Math.floor(Math.random() * matchedQuotes.length)];
    res.json({quote: returnQuote});
})

app.listen(port, () => {
    console.log(`Express recently departed from port ${port}`)
});

module.exports = app;
