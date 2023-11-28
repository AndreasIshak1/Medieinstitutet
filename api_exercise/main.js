import "./style.css";

fetch("https://stephen-king-api.onrender.com/api/book/19")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
