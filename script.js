let button = document.getElementById('button');
setInterval(function () {
    window.addEventListener('scroll', function (e) {
        if (window.scrollY > 50) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }

    })
}, 10);

let directionContainer = document.querySelector("#direction .profil-container")
let otherContainer = document.querySelector("#other .profil-container")

let directionProfil = [
    {id: "0", srcPicture: "img/profil0.jpg", firstname: "Tom", lastname: "Monteil", function: "Owner", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis doloremque cumque, quos natus necessitatibus rerum eveniet voluptatum aperiam eum deserunt quae commodi, in magnam repellendus voluptatibus aut, deleniti omnis."},
    {id: "1", srcPicture: "img/profil1.jpg", firstname: "Sophie", lastname: "Delacroix", function: "Co-Owner", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis doloremque cumque, quos natus necessitatibus rerum eveniet voluptatum aperiam eum deserunt quae commodi, in magnam repellendus voluptatibus aut, deleniti omnis."},
    {id: "2", srcPicture: "img/profil2.jpg", firstname: "Pierrick", lastname: "Choffard", function: "CEO", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis doloremque cumque, quos natus necessitatibus rerum eveniet voluptatum aperiam eum deserunt quae commodi, in magnam repellendus voluptatibus aut, deleniti omnis."},
    {id: "3", srcPicture: "img/profil3.jpg", firstname: "Hugo", lastname: "Girardot", function: "Director", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis doloremque cumque, quos natus necessitatibus rerum eveniet voluptatum aperiam eum deserunt quae commodi, in magnam repellendus voluptatibus aut, deleniti omnis."}
]

let otherProfil = [
    {id: "0", srcPicture: "img/profil4.jpg", firstname: "Linda", lastname: "Chagnon", function: "Personnel Manager", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis doloremque cumque, quos natus necessitatibus rerum eveniet voluptatum aperiam eum deserunt quae commodi, in magnam repellendus voluptatibus aut, deleniti omnis."},
    {id: "1", srcPicture: "img/profil5.jpg", firstname: "William", lastname: "Chandonnet", function: "Finance Manager", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis doloremque cumque, quos natus necessitatibus rerum eveniet voluptatum aperiam eum deserunt quae commodi, in magnam repellendus voluptatibus aut, deleniti omnis."},
    {id: "2", srcPicture: "img/profil6.jpg", firstname: "Sarah", lastname: "Hardouin", function: "Marketing Manager", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis doloremque cumque, quos natus necessitatibus rerum eveniet voluptatum aperiam eum deserunt quae commodi, in magnam repellendus voluptatibus aut, deleniti omnis."},
    {id: "3", srcPicture: "img/profil7.jpg", firstname: "Romain", lastname: "Garcia", function: "Purchasing Manager", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis doloremque cumque, quos natus necessitatibus rerum eveniet voluptatum aperiam eum deserunt quae commodi, in magnam repellendus voluptatibus aut, deleniti omnis."},
    {id: "4", srcPicture: "img/profil8.jpg", firstname: "Ane", lastname: "Lapierre", function: "Production Manager", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis doloremque cumque, quos natus necessitatibus rerum eveniet voluptatum aperiam eum deserunt quae commodi, in magnam repellendus voluptatibus aut, deleniti omnis."},
    {id: "5", srcPicture: "img/profil9.jpg", firstname: "Lisa", lastname: "Melanson", function: "Sales Manager", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis doloremque cumque, quos natus necessitatibus rerum eveniet voluptatum aperiam eum deserunt quae commodi, in magnam repellendus voluptatibus aut, deleniti omnis."},
    {id: "6", srcPicture: "img/profil10.jpg", firstname: "Vincent", lastname: "Truchon", function: "R&D Manager", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis doloremque cumque, quos natus necessitatibus rerum eveniet voluptatum aperiam eum deserunt quae commodi, in magnam repellendus voluptatibus aut, deleniti omnis."}
]

function createProfil(sector, id, srcPicture, firstname, lastname, post) {
    let newProfil = document.createElement("div")
    newProfil.classList.add("profil")
    sector.appendChild(newProfil)

    let picture = document.createElement("img")
    picture.classList.add("profil-picture")
    picture.src = srcPicture   
    newProfil.appendChild(picture)

    let name = document.createElement("h2")
    name.classList.add("profil-name")
    name.innerHTML = `${firstname}<br>${lastname}`
    newProfil.appendChild(name)

    let role = document.createElement("h3")
    role.classList.add("profil-function")
    role.innerHTML = post
    newProfil.appendChild(role)

    let btnMore = document.createElement("button")
    btnMore.classList.add("profil-more")
    // btnMore.classList.add("btn")
    btnMore.setAttribute("id", id)
    btnMore.textContent = "En savoir plus"
    newProfil.appendChild(btnMore)
}

function createProfilSection(section, array) {
    for (let i = 0; i < array.length; i++) {
        createProfil(section, array[i].id, array[i].srcPicture, array[i].firstname, array[i].lastname, array[i].function)
    }
}

createProfilSection(directionContainer, directionProfil)
createProfilSection(otherContainer, otherProfil)


// AFFICHAGE CARD

let btnMoreDirection = document.querySelectorAll("#direction .profil-more")
let btnMoreOther = document.querySelectorAll("#other .profil-more")
let btnExit = document.querySelector(".card-exit")

let cardContainer = document.querySelector(".card-container")
let cardPicture = document.querySelector(".card-picture")
let cardName = document.querySelector(".card-name")
let cardFunction = document.querySelector(".card-function")
let cardDescription = document.querySelector(".card-description")


function searchProfil(profil, array) {
    const profilNumber = profil
    const result = array.find((profil) => profil.id === profilNumber)
    cardContainer.style.display = "flex"
    cardPicture.src = result.srcPicture
    cardName.innerHTML = `${result.firstname} ${result.lastname}`
    cardFunction.innerHTML = result.function
    cardDescription.innerHTML = result.description
  }

for (let btn of btnMoreDirection) {
    btn.addEventListener("click", () => {
        searchProfil(btn.id, directionProfil)
    })
}

for (let btn of btnMoreOther) {
    btn.addEventListener("click", () => {
        searchProfil(btn.id, otherProfil)
    })
}

btnExit.onclick = function () {
    cardContainer.style.display = "none"
}

