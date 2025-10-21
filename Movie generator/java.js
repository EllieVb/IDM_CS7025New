// generating movie list(no API):

let Movies = [
  {
    title: "Inception",
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    director: "Christopher Nolan",
    actors: ["Christian Bale", "Heath Ledger", "Gary Oldman"],
  },
  {
    title: "Pride & Prejudice",
    genre: "Romance",
    director: "Joe Wright",
    actors: ["Keira Knightley", "Matthew Macfadyen", "Rosamund Pike"],
  },
  {
    title: "Me Before You",
    genre: "Romance",
    director: "Thea Sharrock",
    actors: ["Emilia Clarke", "Sam Claflin", "Janet McTeer"],
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
  },
  {
    title: "Coco",
    genre: "Animation",
    director: "Lee Unkrich",
    actors: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
  },
  {
    title: "Inside Out",
    genre: "Animation",
    director: "Pete Docter",
    actors: ["Amy Poehler", "Phyllis Smith", "Mindy Kaling"],
  },
  {
    title: "The Vow",
    genre: "Romance",
    director: "Michael Sucsy",
    actors: ["Rachel McAdams", "Channing Tatum", "Jessica Lange"],
  },
  {
    title: "I Origins",
    genre: "Sci-Fi",
    director: "Mike Cahill",
    actors: ["Michael Pitt", "Brit Marling", "Astrid Bergès-Frisbey"],
  },
  {
    title: "Tenet",
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    actors: ["John David Washington", "Robert Pattinson", "Elizabeth Debicki"],
  },
  {
    title: "Kill Bill: Vol. 1",
    genre: "Action",
    director: "Quentin Tarantino",
    actors: ["Uma Thurman", "Lucy Liu", "David Carradine"],
  },
  {
    title: "The Hateful Eight",
    genre: "Action",
    director: "Quentin Tarantino",
    actors: ["Samuel L. Jackson", "Kurt Russell", "Jennifer Jason Leigh"],
  },
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    director: "Frank Darabont",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    title: "Parasite",
    genre: "Thriller",
    director: "Bong Joon-ho",
    actors: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
  },
  {
    title: "La La Land",
    genre: "Romance",
    director: "Damien Chazelle",
    actors: ["Ryan Gosling", "Emma Stone", "John Legend"],
  },
  {
    title: "Avatar",
    genre: "Sci-Fi",
    director: "James Cameron",
    actors: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver"],
  },
  {
    title: "Gladiator",
    genre: "Action",
    director: "Ridley Scott",
    actors: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
  },
  {
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    director: "Wes Anderson",
    actors: ["Ralph Fiennes", "Tony Revolori", "Saoirse Ronan"],
  },
  {
    title: "Up",
    genre: "Animation",
    director: "Pete Docter",
    actors: ["Edward Asner", "Jordan Nagai", "Christopher Plummer"],
  },
  {
    title: "Oppenheimer",
    genre: "Biography",
    director: "Christopher Nolan",
    actors: ["Cillian Murphy", "Emily Blunt", "Robert Downey Jr."],
  },
];

// defining html elements in JS for linking functions:
let genButton = document.querySelector("button");
let listBox = document.querySelector("#watchList");
// a function including:
function genMovies() {
  // to randomized list of movies and picking the first three :
  let randomMovies = [...Movies].sort(() => 0.5 - Math.random()).slice(0, 3);
  //mapping the titles of the objects out:
  let titles = randomMovies.map((m) => m.title);
  //creating the html structure (using template literal) for the content of "listBox" element and placing the extracted titles in the list and finally printing that:
  listBox.innerHTML = `<div style="text-align: center;"><h3> Your watchList: </h3><br>
  <ul style="list-style: none; padding: 0; display: inline-block;">
    <li>${titles[0]}</li><br>
    <li>${titles[1]}</li><br>
    <li>${titles[2]}</li><br>
  </ul>
</div>`;
  console.log(listBox);
}

// a function that first clears the "listBox" (in case there are already values in there) and then calls the "getMovie" function that does the entire process:
function initiate() {
  listBox.innerHTML = "";
  genMovies();
}
// adding event to the html button where as soon as user clicks, the "initiate" function is called:
genButton.addEventListener("click", initiate);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// //generating animation list using API:
// //the exact same process as above, but using API, fetching and json data:

// let genButton = document.querySelector("button");
// let listBox = document.querySelector("#watchList");

// fetch("https://api.sampleapis.com/movies/animation")
//   .then((response) => response.json())
//   .then((data) => {
//     movies = data;
//   })
//   .catch((error) => console.log("Error fetching movies:", error));

// function genMovies() {
//   let randomMovies = movies.sort(() => 0.5 - Math.random()).slice(0, 3);
//   let titles = randomMovies.map((m) => m.title);
//   listBox.innerHTML = `<div style="text-align: center;"><h3> Your watchList: </h3><br> <ul style="list-style: none; padding: 0; display: inline-block;"> <li>${titles[0]}</li><br> <li>${titles[1]}</li><br> <li>${titles[2]}</li><br> </ul> </div>`;
//   console.log(listBox);
// }
// function initiate() {
//   listBox.innerHTML = "";
//   genMovies();
// }
// genButton.addEventListener("click", initiate);
