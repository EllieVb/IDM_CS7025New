//chose session storage for main crousel of the site (to start on click), because I wanted the crousel to turn off with refreshing the site or opening the site again.
window.onload = function () {
  sessionStorage.clear();
  //defining the image tag (in DOM) in js:
  const mainImg = document.getElementById("mainImg");
  let images = [];
  let index = 0;
  // defined interval null by default so the startCrousel() later gives value to the variable after user clicks, so it starts carousel
  let interval = null;

  // fetching json file and defining the data in javascript. also check if the session storage of "carouselOn" is true or not as soon as it fetches json file
  fetch("main.json")
    .then((response) => response.json())
    .then((data) => {
      images = data["main-carousel-images"];
      checkCarouselState();
    });

  // check if the session storage of "carouselOn" is true to start carousel
  function checkCarouselState() {
    if (sessionStorage.getItem("carouselOn") === "true") {
      startCarousel();
    }
  }

  // assign the value of session storage (key: carouselOn) to be true as the function is called
  function startCarousel() {
    sessionStorage.setItem("carouselOn", "true");
    interval1 = setTimeout(() => {}, 100);
    // the null value of variable changes into a setInterval() so the index is calculated and given to images' src value
    interval = setInterval(() => {
      index = (index + 1) % images.length;
      mainImg.src = images[index];
    }, 2500);
  }

  function stopCarousel() {
    sessionStorage.setItem("carouselOn", "false");
    clearInterval(interval);
    interval = null;
  }
  // if the interval in fuction for the image is not playing then as it is clicked start the carousel
  mainImg.addEventListener("click", () => {
    if (!interval) {
      startCarousel();
    } else {
      stopCarousel();
    }
  });
};

///////////////////////////hamburger menu///////////////////////////////
// defining DOM elements
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeBtn");
const hamMenu = document.querySelector(".ham");
//defining functions for openning and closing
function openHam() {
  hamMenu.style.display = "flex";
}
function colseHam() {
  hamMenu.style.display = "none";
}
//calling both functions by clicking
hamburger.addEventListener("click", openHam);
closeBtn.addEventListener("click", colseHam);

/////////////////////////////////////////////////////////
