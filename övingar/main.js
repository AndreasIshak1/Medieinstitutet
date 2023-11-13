
// 1,2,3 ,4 
import './style.css'

const onClick = document.getElementById("onClick");

function myFirstClick() {
  console.log("Du klickade");
}

onClick.addEventListener("click", sum);

const newContent = document.getElementById("newContent");

function javascript() {
  newContent.innerHTML = "hejsan";
}

const numberOne = document.getElementById("numberOne");
const numberTwo = document.getElementById("numberTwo");

function sum() {
  let result = +numberOne.value + +numberTwo.value;
  if (result < 100) {
    console.log("Det var ett litet tal"); 
    
  }
  else {
    console.log(result + " Det var ett stort tal");
  }
}



