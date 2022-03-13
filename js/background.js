const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];


const sanaImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${sanaImg}`;
console.log(bgImg);

document.body.appendChild(bgImg);