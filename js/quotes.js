const quotes = [
    {
    quote: "고민은 배송만 늦출뿐",
    author: "김가을",
},
{
    quote: "맛있게 먹으면 0칼로리",
    author: "김가을",
},
{
    quote: "음.. 맛이 좋구나",
    author: "김가을",
},
{
    quote: "여봐라! 당장 저 놈의 목을 쳐라!",
    author: "김가을",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;