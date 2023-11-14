import './style.css'

class DragonballList {
  name;
  mode;
  image;

  constructor(name, mode, image) {
    this.name = name;
    this.mode = mode;
    this.image = image;
  }
}

const image1 = ('img/goku.png');
const image2 = ('img/vegeta.png');
const image3 = ('img/broly.png');

const app = document.getElementById('chorbas');
const mainDiv = document.createElement('div');
// mainDiv.className = "flexbox";

const characterOne = new DragonballList("Goku", "Super Saiyan 3", image1);
const characterTwo = new DragonballList("Vegeta", "Super Saiyan 2", image2);
const characterThree = new DragonballList("Broly", "Legendary Super Saiyan", image3);
const DbzChars = [characterOne, characterTwo, characterThree];

for (let i = 0; i < DbzChars.length; i++) {
  const image = document.createElement('img');
  const h1 = document.createElement('h1');
  const paragraph = document.createElement('p');

  mainDiv.appendChild(h1);
  mainDiv.appendChild(paragraph);
  mainDiv.appendChild(image);

  // Set the src attribute instead of innerHTML
  image.src = DbzChars[i].image;
  image.className = "goku";

  h1.innerHTML = DbzChars[i].name;
  paragraph.innerHTML = DbzChars[i].mode;
}

app.appendChild(mainDiv);

// document.body.appendChild(mainDiv); // Den här gör att bodyn absorberar all html kod och gör att den slutligen syns.



// console.log("Hejhej");
