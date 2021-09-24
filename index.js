
const express = require('express');


const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const quotes = require("./quotes.json")




function getQuote(){
   
}



app.get('/', (req, res) => {
    const quote = quotes[Math.floor(Math.random()*quotes.length)];
    res.json({message: quote})
});

app.listen(port, () => {
    console.log(`Express recently departed from port ${port}`)
  });

module.exports = app;
