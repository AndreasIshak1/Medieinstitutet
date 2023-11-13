import { Animal } from "./models/Animal";
import "./style.css";
const animal = new Animal("Andreas", 23, false);
const animal2 = new Animal("Rosa", 23, true);
const animal3 = new Animal("Tage", 1, false);
// const animal = {
//   name: "Majsan",
//   age: 10,
//   isVaccinated: true,
// };

const animals = [animal, animal2, animal3];

const animalContainer = document.createElement("div");
const nameTag = document.createElement("p");
const ageTag = document.createElement("input");
const checkbox = document.createElement("input");

animalContainer.className = "card";
nameTag.innerHTML = animal.name;
ageTag.type = "number";
ageTag.value = animal.age;

checkbox.type = "checkbox";
checkbox.checked = animal.isVaccinated;

animalContainer.appendChild(nameTag);
animalContainer.appendChild(ageTag);
animalContainer.appendChild(checkbox);
animalContainer.appendChild(animalContainer);
