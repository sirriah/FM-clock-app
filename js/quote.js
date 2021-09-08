// the elements from the index.html
const authorQuote = document.getElementById('quote__author');
const contentQuote = document.getElementById('quote__content');
const buttonQuote = document.getElementById('quote__button');

const quoteDefault = {author : 'Ada Lovelace', content : 'The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.'}

// fetching the data
const fetchingApi = () => {
    fetch('https://api.quotable.io/random')
    .then(data => data.json())
    .then(quote => processQuote(quote))
    .catch(err => processQuote(quoteDefault));

}

// filling the elements with data
const processQuote = (quote) => {
    authorQuote.innerHTML = quote.author;
    contentQuote.innerHTML = quote.content;
}

//calling the fetching again - refreshing button
buttonQuote.addEventListener('click', e => {
    fetchingApi();
})

fetchingApi();