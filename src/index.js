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
init()


function getToys () {
  fetch("http://localhost:3000/toys")
  .then((resp) => resp.json())
  .then((toyData) => {
    toyData.forEach(toy => renderCard(toy))
  })
}



// let submitBtn = document.querySelector("input.submit")

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault()
//   let inputForm = e.target.parentNode
//   let input = inputForm.querySelectorAll("input.input-text")
//   let name = input[0].value
//   let image = input[1].value

//   fetch("http://localhost:3000/toys", {

//     method: "POST",

//     headers: 
//     {
//       "Content-type": "application/json",
//       Accept: "application/json"
//     },

//     body: JSON.stringify({
//       "name": name,
//       "image": image,
//       "likes": 0
//     })

//   })
//   .then((resp) => resp.json())
//   .then((resp) => console.log((JSON.stringify(resp))))
// })