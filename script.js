import profileArray from "./profileArray.json" assert { type: "json" };

let button = document.getElementById('button');
let btnMoreCreator = document.querySelectorAll("footer span");
let btnExit = document.querySelector(".button-exit");

let cardContainer = document.querySelector(".container-card");
let cardPicture = document.querySelector(".picture-card");
let cardAge = document.querySelector(".age-card");
let cardName = document.querySelector(".name-card");
let cardFunction = document.querySelector(".function-card");
let cardHobbie = document.querySelector(".hobbie-card");
let cardGithub = document.querySelector(".github");
let cardLinkedin = document.querySelector(".linkedin");
let cardCreator = document.querySelector(".creator")

let directionContainer = document.querySelector("#direction .container-profil");
let devContainer = document.querySelector("#dev .container-profil");
let dataContainer = document.querySelector("#data .container-profil");

let logo = document.querySelector(".img-logo-W");

logo.addEventListener("mouseover", () => {
    logo.src = "img/logo-anim.gif"
})

logo.addEventListener("click", () => {
    logo.src = "img/logo-anim.gif"
})



createProfilSection(profileArray);


setInterval(function () {
    window.addEventListener('scroll', function (e) {
        if (window.scrollY > 50) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }

    });
}, 10);


function createProfil(sector, id, srcPicture, firstname, lastname) {
    let newProfil = document.createElement("div");
    newProfil.classList.add("profil");
    sector.appendChild(newProfil);

    let picture = document.createElement("img");
    picture.classList.add("profil-picture");
    picture.src = `${srcPicture}.jpg`;
    newProfil.appendChild(picture);

    let name = document.createElement("h2");
    name.classList.add("profil-name");
    name.innerHTML = `${firstname}<br>${lastname.toUpperCase()}`;
    newProfil.appendChild(name);

    let btnMore = document.createElement("button");
    btnMore.classList.add("profil-more");
    btnMore.textContent = "En savoir plus";
    btnMore.addEventListener('click', () => {
        searchProfil(id, profileArray);
    });
    newProfil.appendChild(btnMore);
}

function createProfilSection(profileArray) {
    profileArray.map((profile) => {
        if(profile.dev){
            createProfil(devContainer, profile.id, profile.srcPicture, profile.firstname, profile.lastname);
        } else if (profile.direction) {
            createProfil(directionContainer, profile.id, profile.srcPicture, profile.firstname, profile.lastname);
        } else if (profile.data) {
            createProfil(dataContainer, profile.id, profile.srcPicture, profile.firstname, profile.lastname);
        }
    });
}


function searchProfil(id, profileArray) {
    const result = profileArray.find((profil) => profil.id === id);
    const pictureCardContainer = document.querySelector('.picture-card-container');
    const numberOfImages = pictureCardContainer.children.length;
    if(numberOfImages === 2) {
        const looserImageRef = document.querySelector('.looser-image');
        looserImageRef.style.display = 'none';
    }
    cardContainer.style.display = "flex";
    cardPicture.style.display = 'block';
    cardCreator.style.display = result.creator ? "block" : "none";
    cardPicture.src = `${result.srcPicture}.jpg`;
    cardName.innerHTML = `${result.firstname}<br>${result.lastname.toUpperCase()}`;
    cardAge.innerHTML = `${result.age} ans`;
    cardFunction.innerHTML = result.direction ? `${result.function}` : (result.sexe === "m" ? `Ancien ${result.function}` : `Ancienne ${result.function}`);
    cardHobbie.innerHTML = `Hobbie : ${result.hobbie}`;
    cardGithub.href = result.github;
    cardGithub.style.display = !result.github ? "none" : "inline-block";
    cardLinkedin.href = result.linkedin;
    cardLinkedin.style.display = !result.linkedin ? "none" : "inline-block";
    if(id === "4" || id === "8") {
        const numberOfImages = pictureCardContainer.children.length;
        cardPicture.style.display = 'none';
        if(numberOfImages === 1) {
            let looserImage = document.createElement("img");
            looserImage.classList.add('looser-image');
            looserImage.classList.add('picture-card');
            pictureCardContainer.appendChild(looserImage);
            const looserImageRef = document.querySelector('.looser-image');
            looserImageRef.src = `${result.srcPicture}.jpg`;
            let music = document.createElement("div");
            looserImageRef.addEventListener("mouseover", () => {
                music.innerHTML = `<audio src="test.mp3" autoplay="true"></audio>`;
                looserImageRef.src = `${result.srcPicture}bis.jpg`;
                looserImageRef.classList.add("movePicture");
                cardContainer.appendChild(music);
            })
            looserImageRef.addEventListener("mouseleave", () => {
                looserImageRef.src = `${result.srcPicture}.jpg`;
                looserImageRef.classList.remove("movePicture");
                cardContainer.removeChild(music);
            })
        } else if (numberOfImages === 2) {
            const looserImageRef = document.querySelector('.looser-image');
            looserImageRef.style.display = 'block';
        }
    }
}

for (let btn of btnMoreCreator) {
    btn.addEventListener("click", () => {
        searchProfil(btn.id, profileArray)
    })
}

btnExit.onclick = function () {
    cardContainer.style.display = "none";
}
