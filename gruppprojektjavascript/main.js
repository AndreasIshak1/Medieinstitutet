import "./style.css";

// const form = document.getElementById("form");
// let theGuess = 0;
// let rightNumber = 0;

// form.addEventListener("submit", save);

// function save(e) {
//   e.preventDefault();
//   rightNumber = +document.getElementById("textField").value;

//   while (theGuess !== rightNumber) {
//     theGuess = +prompt("gissa igen");
//     if (theGuess > rightNumber) {
//       alert("Du gissade för högt");
//     } else if (theGuess < rightNumber) {
//       alert("Du gissade för lågt");
//     } else {
//       alert("Du gissade rätt");
//     }
//   }
// }

const fruits = ["Apple", "Pear", "Orange", "Lychee"];
const ul = document.createElement("ul");
const lists = document.getElementById("lists");
lists.appendChild(ul);
const paragraph = document.createElement("p");
const body = document.querySelector("body");

for (let i = 0; i < fruits.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = fruits[i];
  ul.appendChild(li);
  li.className = "fruitListsStyle";

  li.addEventListener("click", () => {
    paragraph.innerHTML = "du valde " + fruits[i];
    body.appendChild(paragraph);
    paragraph.className = "banan";
  });
}

const trees = ["Oak", "Christmas", "Cherry", "Spruce"];
