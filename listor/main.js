import './style.css'

const theForm = document.getElementById("theForm");
const firstName = document.getElementById("firstname");

firstName.addEventListener("keypress", (e) => {
  console.log("asudiadsuasdjas", e.target.value);
});

theForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submitting stuff");

});


const numbers = [1, 1, 2, 3, 5, 8, 13];
const ul = document.getElementById("theList");
for(let i = 0; i < numbers.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = numbers[i];
  ul.appendChild(li);
}