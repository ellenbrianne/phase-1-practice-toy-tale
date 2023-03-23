let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

//


function renderCard (toy) {
    let card = document.createElement("div")
    card.className = "card"

  card.innerHTML = `
    <h2>${toy.name}</h2>
      <img src="${toy.image}" class="toy-avatar"/>
      <p>0 likes</p>
      <button class="like-btn" id="${toy.id}">Like ❤️</button>
  `
  document.getElementById("toy-collection").appendChild(card)

}

function init () {
  getToys()
}
// init()


function getToys () {
  fetch("http://localhost:3000/toys")
  .then((resp) => resp.json())
  .then((toyData) => {
    toyData.forEach(toy => renderCard(toy))
  })
}

//

let form = document.querySelector("form.add-toy-form")
form.addEventListener("submit", formSubmit)

function formSubmit (e) {
  e.preventDefault()

  let toyObject = {
    name: e.target.name.value,
    image: e.target.image.value,
    likes: 0
  }

  renderCard(toyObject)
  createCard(toyObject)

}

function createCard (toyObject) {
  fetch("http://localhost:3000/toys", {
    method: "POST",

    headers: 
    {
      "Content-type": "application/json",
      Accept: "application/json"
    },

    body: JSON.stringify(toyObject)
  })
  .then(resp => resp.json())
  .then(toy => console.log(toy))
}