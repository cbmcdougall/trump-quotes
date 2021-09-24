
const express = require('express');
const quotes = require('./quotes.json');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;




app.get('/', (req, res) => {
    const quote = quotes[Math.floor(Math.random()*quotes.length)];
    res.json({message: quote})
});


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
