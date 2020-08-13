//array to get quotes
let quotes = [
    'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
    'It’s so easy to be great nowadays, because everyone else is weak. If you have ANY mental toughness, if you have any fraction of self-discipline; The ability to not want to do it, but still do it; If you can get through to doing things that you hate to do: on the other side is GREATNESS ',
    'You came here empty-handed, and you will leave empty-handed. What is yours today belonged to someone else yesterday, and will belong to someone else tomorrow',
    'We must be entirely honest with somebody if we expect to live long or happily in this world.',
    'A man is not called wise because he talks and talks again; but if he is peaceful, loving and fearless then he is in truth called wise.',
    'We can complain because rose bushes have thorns, or rejoice because thorn bushes have roses',
    'Success is not final, failure is not fatal: it is the courage to continue that counts',
];

//array to match author to quote
let authors = [
    ' - Martin Luther King, Jr.',
    ' - The Bible',
    ' - The Bhagavad Gita',
    ' - Alcoholics Anonymous',
    ' - The Buddha',
    ' - Abraham Lincoln',
    ' - Winston Churchill',
];
//array to generate background color
let backgrounds = [
    '#002642',
    '#7D1538',
    '#8b50d4',
    '#5CC8FF',
    '#ADFCF9',
    '#E3D8F1',
    '#454ADE',
];

//generate random quote from array

function newQuote () {
    let number = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[number] + authors[number];
    //change container background color according to quote
    document.getElementById('container').style.backgroundColor = backgrounds[number];
    //change text color to go with background
    if (number >= 2 || number == 6) { //dark background colors (white text)
        document.getElementById('container').style.color = '#010105';
        document.getElementById('quotes').style.color = '#010105';
        document.getElementById('greeting').style.color = '#010105';
    } else { //light background colors (black text)
        document.getElementById('container').style.color = '#eef1ef';
        document.getElementById('quotes').style.color = '#eef1ef';
        document.getElementById('greeting').style.color = '#eef1ef';
    }
}

newQuote();

//Greeting


//show a new date
const showDate = () => {
    let date = new Date();
    document.getElementById('date').innerHTML = date.toLocaleDateString('eng-US');
};

showDate();

//generate quote on load
const firstQuote = () => {
    window.onload = () => {
        return newQuote();
    };
};

firstQuote();
