// const jar = "gummy bears";
// console.log(jar);
// console.log(typeof jar);

// let newArray = ["name", 3, { program: "interactive digital media" }];

// console.log(newArray[1], newArray[2]);

// const studentDocs = {
//   names: ["Allen", "Ellie", "Mina"],
//   age: [34, 25, 28],
//   phoneNumbers: {
//     home: "02166389768",
//     cellPhone: "08432256867",
//   },
//   address: {
//     postalCode: 46788,
//     city: "Dublin",
//   },
// };

// console.log(studentDocs.names);
// console.log(studentDocs.age);
// console.log(studentDocs.phoneNumbers.home);
// console.log(newArray[1]);
// console.log(newArray[2].program);

// // // ++++++++++++++++++++++++++++++++++++++++++++
// let totalScore = [];

// function playerScore1() {
//   totalScore++;
// }

// playerScore1();
// playerScore1();
// playerScore1();
// playerScore1();

// console.log(totalScore);

// console.log("Name:", studentDocs.names[0]);

// // // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var studentName = "Robert";
// function doSomething() {
//   return studentName;
// }
// console.log(doSomething());
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function sum(a, b) {
//   console.log("a", a, "b", b);
//   return a + b;
// }
// console.log(sum(5, 2));

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // F = (°C × 9/5) + 32
// // °C = (°F - 32) × 5/9

// function celsiusToFahrenheit(celsius) {
//   let sum = celsius * (9 / 5) + 32;
//   console.log(sum);
// }
// function fahrenheitToCelsius(fahrenheit) {
//   let sum = (fahrenheit - 32) * (5 / 9);
//   console.log(sum);
// }
// celsiusToFahrenheit(14);
// fahrenheitToCelsius(10);
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function calculator(num1, num2, operator) {
//   let finSum;
//   if (operator === "+") {
//     finSum = num1 + num2;
//   } else if (operator === "-") {
//     finSum = num1 - num2;
//   } else if (operator === "/") {
//     finSum = num1 / num2;
//   } else if (operator === "*") {
//     finSum = num1 * num2;
//   }
//   console.log(num1 + operator + num2 + "=" + finSum);
// }

// calculator(2, 2, "+");
// calculator(2, 2, "*");
// calculator(2, 2, "/");
// calculator(2, 2, "-");
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function cakeRecipe(numOfGuests, ovenTemp) {
//   console.log("add " + numOfGuests + " cups of flour");
//   console.log("add " + 2 * numOfGuests + " cups of butter");
//   console.log("add " + 0.5 * numOfGuests + " cups of sugar");
//   console.log("add a pinch of salt");
//   console.log("add " + 0.4 * numOfGuests + " cups of milk");
//   console.log("Mix for 10 minutes!");
//   if (ovenTemp >= 220) {
//     console.log("Too hot! Reduce heat.");
//   } else {
//     console.log(
//       "put the mixture in the oven for " + 15 * numOfGuests + "minutes!"
//     );
//     console.log("viola! Bon appetit!");
//   }
// }

// cakeRecipe(5, 120);
// cakeRecipe(5, 230);

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let taskList = [];
// function addTask(newTask) {
//   taskList.push(newTask);
//   console.log(taskList);
// }

// addTask("do Laundry");
// addTask("do shopping");

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function brushTeeth() {
//   console.log("put paste on your brush!");
//   console.log("put it in your mouth!");
//   console.log("gently scrub!");
//   console.log("rinse!");
// }
// function exercise() {
//   console.log("do 3*10 pushups!");
//   console.log("do 3*10 side kicks");
//   console.log("cool down!");
// }
// function eatBreakfast() {
//   console.log("make some pourage!");
//   console.log("put chopped banana on it");
//   console.log("put some nuts on it");
//   console.log("enjoy your day!");
// }

// function morningRoutine() {
//   brushTeeth();
//   exercise();
//   eatBreakfast();
// }

// morningRoutine();

// // +++++++++++++++++++++++++++++++++++++++++++++++++++

// let total = 0;
// function calculateTotal(prices) {
//   total = total + prices;
//   console.log(total);
// }
// function applyDiscount(total, discountPercent) {
//   total = total - discountPercent / 100;
//   console.log(total);
// }
// function checkout() {
//   calculateTotal(20);
//   applyDiscount(total, 5);
// }

// checkout();

// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function checkPassword(password) {
//   if (password.length <= 3) {
//     console.log("password is too short!");
//   } else if (password.length >= 12) {
//     console.log("strong password!");
//   } else {
//     console.log("moderate password!");
//   }
// }

// checkPassword("hello");
// checkPassword("hi");
// checkPassword("hello world!");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function showRandomQuote() {
//   let quotes = [
//     "just do it!",
//     "you can do it!",
//     "be optimistic!",
//     "good job!",
//     "you are strong!",
//     "you are brave!",
//     "you are capabl!e",
//   ];
//   console.log(quotes[Math.floor(Math.random() * quotes.length)]);
// }
// showRandomQuote();
// showRandomQuote();
// showRandomQuote();
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let lilLen = {
//   name: "lil Len",
//   age: 3,
//   introversion: true,
//   secretTalent: function () {
//     console.log("start the car");
//     console.log("go to the highway");
//     console.log("drift!");
//     this.introversion = false;
//   },
// };

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let usd = {
  usd: 1,
  eur: 0.86,
  gbp: 0.74,
};
let eur = {
  eur: 1,
  usd: 1.16,
  gbp: 0.86,
};
let gbp = {
  gbp: 1,
  eur: 1.14,
  usd: 1.33,
};
function exchange(amount, inputCur, outputCur) {
  let exchangedSum;
  if (inputCur === "usd") {
    exchangedSum = amount * usd[outputCur];
  } else if (inputCur === "eur") {
    exchangedSum = amount * eur[outputCur];
  } else if (inputCur === "gbp") {
    exchangedSum = amount * gbp[outputCur];
  }
  console.log(exchangedSum + " " + outputCur);
}
exchange(6, "gbp", "eur");
exchange(8, "eur", "usd");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
