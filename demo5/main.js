import './style.css'

const foods = ["Pizza", "Tacos", "Sushi"];
const foodsContainer = document.getElementById("foods");
// for loop
// for (let i = 0; i < foods.length; i++) {
//   const foodContainer = document.createElement("div");
//   const title = document.createElement("h3");
//   title.innerHTML = foods[i];
//   foodContainer.className = "food";
//   foodContainer.appendChild(title);
//   foodsContainer.appendChild(foodContainer);
// };


//for each loop
// foods.forEach((value) => {
//   const foodContainer = document.createElement("div");
//   const title = document.createElement("h3");
//   title.innerHTML = value;
//   foodContainer.className = "food";
//   foodContainer.appendChild(title);
//   foodsContainer.appendChild(foodContainer);
// }
// );

// map funktion loop

const altFoods = foods.map((value) => {
  value.split("").reverse("").join("");

});

altFoods.forEach((value) => {
  const foodContainer = document.createElement("div");
  const title = document.createElement("h3");
  title.innerHTML = value;
  foodContainer.className = "food";
  foodContainer.appendChild(title);
  foodsContainer.appendChild(foodContainer);
}
);