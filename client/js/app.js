function getQuotes(){
    fetch('http://localhost:3000')
        .then(r => r.json())
        .then(appendQuote)
        .catch(console.warn)
};


function appendQuote(quote){
    const newLi = document.createElement('li');
    newLi.textContent = `${quote}`
    const quoteList = document.querySelector('ul');
    quoteList.append(newLi);
};