"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

async function getRandomImage() {
    const endpoint = "http://localhost:8080/api/v1/getRandomImage";
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.data;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url(${receivedPhotoUrl})`;
    } catch (error) {
        console.error(error);
    }
}

getRandomImage();

// async function getRandomImage() {
//     const client_id = "rMnB2bJVSMZX6i0XdIlyz_-lMShFAlKysb28xv5bljA";
//     const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
//     try {
//         const response = await fetch(endpoint);
//         const returnedData = await response.json();
//         const receivedPhotoUrl = returnedData.urls.regular;

//         const imgDiv = document.querySelector(".background-img");
//         imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
//     } catch (error) {
//         console.error(error);
//     }
// }    
// getRandomImage();

// Practice Stuff - See The Quote Card Express: Part 3



// const quotes = [
//     {
//         quote: "All hands! Abandon ship!",
//         author: "Captain Picard",
//     },

//     {
//         quote: "Doh!",
//         author: "Homer Simpson",
//     },

//     {
//         quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
//         author: "Thomas A. Edison",
//     }
// ]

// function loopThroughQuotes() {
//     let quoteIndex = 0;
//     setInterval(() => {
//         if (quoteIndex < quotes.length) {
//             elements.quote.textContent = quotes[quoteIndex].quote;
//             elements.author.textContent = quotes[quoteIndex].author;
//             quoteIndex++;
//         } else {
//             quoteIndex = 0;
//         }
//     }, 3000);
// }

// setTimeout(loopThroughQuotes, 3000);