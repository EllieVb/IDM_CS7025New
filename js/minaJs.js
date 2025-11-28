// // exact same carousel as index page but without click eventlistener and with title and description in html structure
window.onload = function () {
  // defining the DOM elements in js
  const slide = document.getElementById("slide");
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  // +++++++++++++++++++
  let photos = [];
  let index = 0;
  let carouselTimer = null;
  // +++++++++++++++++++
  // fetching data(photos and text) from json file
  fetch("mina.json")
    .then((res) => res.json())
    .then((data) => {
      photos = data["mina-carousel"];
      imgList = document.querySelectorAll(".list div img");
      //creating three functions: 1-to move the slider according to the main photo  2- preview the first photo  3- make the carousel running
      moveSlider();
      showPhoto();
      startCarousel();
    });

  function showPhoto() {
    //adding element property (src) and text
    slide.src = photos[index].src;
    title.innerHTML = photos[index].title;
    desc.innerHTML = photos[index].desc;
    moveSlider();
  }
  function moveSlider() {
    // loop through img tags in DOM to update index in slider elements
    imgList.forEach((img, i) => {
      const imgIndex = (index + i + 1) % photos.length;
      img.src = photos[imgIndex].src;
    });
  }

  function startCarousel() {
    //to reset the timer after 1- user clicking next button 2- previous button 3- clicking the actual photos in slider
    clearInterval(carouselTimer);
    carouselTimer = setInterval(() => {
      index = (index + 1) % photos.length;
      showPhoto();
    }, 5000);
  }

  //giving user access through three way mentioned above:
  //1- clicking prev button:
  prev.addEventListener("click", () => {
    index = (index + 1) % photos.length;
    showPhoto();
    startCarousel();
  });
  //1- clicking next button:
  next.addEventListener("click", () => {
    index = (index - 1 + photos.length) % photos.length;
    showPhoto();
    startCarousel();
  });
  //1- clicking photos of the slider:
  document.querySelectorAll(".list div img").forEach((img, i) => {
    img.addEventListener("click", () => {
      index = (index + i + 1) % photos.length;
      showPhoto();
      startCarousel();
    });
  });
};
