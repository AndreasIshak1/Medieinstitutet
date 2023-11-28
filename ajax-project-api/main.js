import "./style.css";

const mainDiv = document.getElementById("app");

const searchText = document.createElement("input");
const leButton = document.createElement("button");

leButton.innerHTML = "Kahbe";
leButton.addEventListener("click", () => {
  const searchValue = searchText.value;

  const resultsContainer = document.createElement("div");
  resultsContainer.className = "resultsContainer";

  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=b15dbd6&s=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.Search.length; i++) {
        const diva = document.createElement("div");
        diva.className = "container";

        const h1 = document.createElement("h1");
        h1.innerHTML = data.Search[i].Title;
        h1.className = "title";

        const h3 = document.createElement("h3");
        h3.innerHTML = data.Search[i].Year;
        h3.className = "year";

        const img = document.createElement("img");
        img.src = data.Search[i].Poster;
        img.className = "poster";

        diva.appendChild(img);
        diva.appendChild(h3);
        diva.appendChild(h1);
        resultsContainer.appendChild(diva);
      }

      mainDiv.innerHTML = "";
      mainDiv.appendChild(searchText);
      mainDiv.appendChild(leButton);
      mainDiv.appendChild(resultsContainer);
    });
});

mainDiv.appendChild(searchText);
mainDiv.appendChild(leButton);
