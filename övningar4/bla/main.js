import 'index.html'


const ul = document.getElementByid = "ul";
const animals = ["ko", "loo", "katt", "hund"];    //datatyp === string


for (let i = 0; i < animals.length; i++) {
  const li = document.createElement("li");
li.innerHtml = animals[i];
ul.appendChild(li);
// i===0 "ko"
}
const theNumber = 4711;
let theGuess = 0;
while (theGuess !== theNumber) {
  i++;
}