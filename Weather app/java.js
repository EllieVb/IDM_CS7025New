// I could've straight away written the url, but instead of a static link I separated base url and query in form of template literal* below:
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "30eece8ecf7a51d1adb28082f74ac92e";

// defining html tags and elements for accessability in JS:
const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");
const weatherBox = document.getElementById("weather");

// creating a function to initiate fetching the data as soon as user clicks the search button:
function getWeather(city) {
  // *a dynamic url to use in fetch()
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}`;
  // processing (fetch/ then response/ then data/catch err):
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // creating a variable(weatherBoxText) to manage our weather data in the intended html-box(weatherBox).
      const weatherBoxText = `<h1>${data.name}, ${data.sys.country}<h1/>
      <p>${data.weather[0].main}<br><br>Temprature: ${data.main.temp} °C</p>
      <p>Humidity: ${data.main.humidity}%</p>`;
      // assigning the inner html structure of weatherBox equal to the text we created above using template literal:
      weatherBox.innerHTML = weatherBoxText;
      // finally printing the organized data in html:
      console.log(weatherBoxText);
    })
    .catch((error) => console.log(error));
}

// creating a function to assign user input value to name of the city and initiating the search process:
function searchHandler() {
  const cityName = searchInput.value;
  // calling the function:
  getWeather(cityName);
}

// adding a event listener to link the html button tag to JS functions:
searchButton.addEventListener("click", searchHandler);
