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

// CREATION DES PROFILS

let directionContainer = document.querySelector("#direction .container-profil")
let devContainer = document.querySelector("#dev .container-profil")
let dataContainer = document.querySelector("#data .container-profil")


let directionProfil = [
    { id: "0", sexe: "m", srcPicture: "img/profil0.jpg", firstname: "Tom", lastname: "Monteil", function: "Owner", age: "30", hobbie: "Cinéma" },
    { id: "1", sexe: "f", srcPicture: "img/profil1.jpg", firstname: "Sophie", lastname: "Delacroix", function: "Co-Owner", age: "30", hobbie: "Cinéma" },
    { id: "2", sexe: "m", srcPicture: "img/profil2.jpg", firstname: "Pierrick", lastname: "Choffard", function: "CEO", age: "30", hobbie: "Cinéma" },
    { id: "3", sexe: "m", srcPicture: "img/profil3.jpg", firstname: "Hugo", lastname: "Girardot", function: "Director", age: "30", hobbie: "Cinéma" }
]

let devProfil = [
    { id: "0", sexe: "f", srcPicture: "img/profil4.jpg", firstname: "Linda", lastname: "Chagnon", function: "Personnel Manager", age: "30", hobbie: "Cinéma" },
    { id: "1", sexe: "m", srcPicture: "img/profil5.jpg", firstname: "William", lastname: "Chandonnet", function: "Finance Manager", age: "30", hobbie: "Cinéma" },
    { id: "2", sexe: "f", srcPicture: "img/profil6.jpg", firstname: "Sarah", lastname: "Hardouin", function: "Marketing Manager", age: "30", hobbie: "Cinéma" },
    { id: "3", sexe: "m", srcPicture: "img/profil7.jpg", firstname: "Romain", lastname: "Garcia", function: "Purchasing Manager", age: "30", hobbie: "Cinéma" },
    { id: "4", sexe: "f", srcPicture: "img/profil8.jpg", firstname: "Ane", lastname: "Lapierre", function: "Production Manager", age: "30", hobbie: "Cinéma" },
    { id: "5", sexe: "f", srcPicture: "img/profil9.jpg", firstname: "Lisa", lastname: "Melanson", function: "Sales Manager", age: "30", hobbie: "Cinéma" },
    { id: "6", sexe: "m", srcPicture: "img/profil10.jpg", firstname: "Vincent", lastname: "Truchon", function: "R&D Manager", age: "30", hobbie: "Cinéma" }
]

let dataProfil = [
    { id: "0", sexe: "f", srcPicture: "img/profil4.jpg", firstname: "Linda", lastname: "Chagnon", function: "Personnel Manager", age: "30", hobbie: "Cinéma" },
    { id: "1", sexe: "m", srcPicture: "img/profil5.jpg", firstname: "William", lastname: "Chandonnet", function: "Finance Manager", age: "30", hobbie: "Cinéma" },
    { id: "2", sexe: "f", srcPicture: "img/profil6.jpg", firstname: "Sarah", lastname: "Hardouin", function: "Marketing Manager", age: "30", hobbie: "Cinéma" },
    { id: "3", sexe: "m", srcPicture: "img/profil7.jpg", firstname: "Romain", lastname: "Garcia", function: "Purchasing Manager", age: "30", hobbie: "Cinéma" },
    { id: "4", sexe: "f", srcPicture: "img/profil8.jpg", firstname: "Ane", lastname: "Lapierre", function: "Production Manager", age: "30", hobbie: "Cinéma" },
    { id: "5", sexe: "f", srcPicture: "img/profil9.jpg", firstname: "Lisa", lastname: "Melanson", function: "Sales Manager", age: "30", hobbie: "Cinéma" },
    { id: "6", sexe: "m", srcPicture: "img/profil10.jpg", firstname: "Vincent", lastname: "Truchon", function: "R&D Manager", age: "30", hobbie: "Cinéma" }
]

function createProfil(sector, id, srcPicture, firstname, lastname) {
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

    let btnMore = document.createElement("button")
    btnMore.classList.add("profil-more")
    btnMore.setAttribute("id", id)
    btnMore.textContent = "En savoir plus"
    newProfil.appendChild(btnMore)
}

function createProfilSection(section, array) {
    for (let i = 0; i < array.length; i++) {
        createProfil(section, array[i].id, array[i].srcPicture, array[i].firstname, array[i].lastname)
    }
}

createProfilSection(directionContainer, directionProfil)
createProfilSection(devContainer, devProfil)
createProfilSection(dataContainer, dataProfil)

// AFFICHAGE CARD

let btnMoreDirection = document.querySelectorAll("#direction .profil-more")
let btnMoreDev = document.querySelectorAll("#dev .profil-more")
let btnMoreData = document.querySelectorAll("#data .profil-more")
let btnExit = document.querySelector(".button-exit")

let cardContainer = document.querySelector(".container-card")
let cardPicture = document.querySelector(".picture-card")
let cardAge = document.querySelector(".age-card")
let cardName = document.querySelector(".name-card")
let cardFunction = document.querySelector(".function-card")
let cardHobbie = document.querySelector(".hobbie-card")


function searchProfil(profil, array) {
    const profilNumber = profil
    const result = array.find((profil) => profil.id === profilNumber)
    cardContainer.style.display = "flex"
    cardPicture.src = result.srcPicture
    cardName.innerHTML = `${result.firstname}<br>${result.lastname}`
    cardAge.innerHTML = `${result.age} ans`
    cardFunction.innerHTML = result.sexe === "m" ? `Ancien ${result.function}` : `Ancienne ${result.function}`
    cardHobbie.innerHTML = `Hobbie : ${result.hobbie}`
}

for (let btn of btnMoreDirection) {
    btn.addEventListener("click", () => {
        searchProfil(btn.id, directionProfil)
    })
}

for (let btn of btnMoreDev) {
    btn.addEventListener("click", () => {
        searchProfil(btn.id, devProfil)
    })
}

for (let btn of btnMoreData) {
    btn.addEventListener("click", () => {
        searchProfil(btn.id, dataProfil)
    })
}

btnExit.onclick = function () {
    cardContainer.style.display = "none"
}

