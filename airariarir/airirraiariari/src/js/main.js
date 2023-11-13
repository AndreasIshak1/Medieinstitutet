import './../css/style.css'

function myFirstFunction() {
  console.log("Du klickar");
}
const paintItBlue = (e) => {
  e.target.classList.add("blue");
}
const first = document.getElementById("first");
first.addEventListener("click", myFirstFunction);
first.addEventListener("mouseenter", paintItBlue);
first.addEventListener("mouseleave", (event) => {
  console.log(event.target);
});
 
first.classList.add("red");
first.classList.remove("red");
first.classList.toggle("blue");