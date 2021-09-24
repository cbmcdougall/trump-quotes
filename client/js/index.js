
// const btn = document.querySelector('button');

// btn.addEventListener('click', getQuotes);

getQuotes();

function getQuotes(){
    fetch('http://localhost:3000')
        .then(r => r.json())
        // .then(obj =>console.log(obj.quote))
        .then(obj => appendQuote(obj.quote))
        .catch(console.warn)
};

function appendQuote(quote){
    // const newLi = document.createElement('li');
    // newLi.textContent = `${quote}`
    // const quoteList = document.querySelector('ul');
    // quoteList.append(newLi);
    document.querySelector('p').textContent = `${quote}`;
    // console.log(newLi);
};