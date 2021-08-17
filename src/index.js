const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/toys")
    .then(response => response.json())
    .then(toys => {
    let toysHTML = toys.map(function(toy){
      return `  
      <div class="card">
      <h2>${toy.name}</h2>
      <img src=${toy.image}class="toy-avatar" />
      <p>${toy.likes} Likes </p>
      <button class="like-btn">Like <3</button>
    </div>
    `
    })
    document.querySelector("#toy-collection").innerHTML = toysHTML.join('')
  
  toyFormContainer.addEventListener("submit", function(e){
    e.preventDefault
    console.log(e.target)
  })
})
 
 
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

