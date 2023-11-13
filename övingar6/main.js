import "./style.css";

class Person {
  age;
  firstName;
  height;

  constructor(age, firstName, height) {
    this.age = age;
    this.firstName = firstName;
    this.height = height;
  }
}

const person = new Person("23", "Andreas", "181");
const person1 = new Person("30", "Joel", "195");
const person2 = new Person("30", "Simon", "183");
const myFunction = document.getElementById("hejsan");
const persons = [person, person1, person2];
document.body.appendChild(myFunction);
for (let i = 0; i < persons.length; i++) {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = persons[i];
  myFunction.appendChild(paragraph);
}
