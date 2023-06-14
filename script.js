let input = document.getElementById("input-box");
let button = document.getElementById("submit-button");
let showContainer = document.getElementById("show-container");
let date = new Date();
console.log(date.getTime());
let listContainer = document.querySelector(".list");


 async function getResult(){
     showContainer.innerHTML = "";
     if (input.value === "") {
            alert("Please Enter a Character Name");
            return;
     }
     const url =   `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${HashValue}&name=${input.value}`
;

     const response = await fetch(url);
     const data = await response.json();
     data.data["results"].forEach((element) => {
         showContainer.innerHTML = ` <div class = "card-container"> 
   <div class = "container-character-image">
   <img src = "${element.thumbnail["path"] + "." + element.
             thumbnail["extension"]}" alt = ""/> </div>
       <div class = "character-name">${element.name}</div>
       <div class = "character-description">${element.description}</div>
       </div>`;
     });
}
const [timestamp, apiKey, HashValue] = [ts,publicKey,hashVal];

button.addEventListener("click", getResult);

window.onload = () => {
    getResult("iron man");
};

