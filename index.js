const quotes = require("./quotes.json")




async function getQuote(){
    const quote = quotes[Math.floor(Math.random()*quotes.length)];
    const json = JSON.stringify({quote:quote});

    return new Response(json, )
}