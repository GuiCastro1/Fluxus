document.getElementById("BodySizing").addEventListener("onresize", function () {
    if (window.innerWidth >= 750) {
        document.getElementById("NavBar").style.display = "block"
    }else{
         document.getElementById("NavBar").style.display = "none"
    }
});

document.getElementById("Menu").addEventListener("click", function () {

    if (document.getElementById("NavBar").style.display == "block") {

        document.getElementById("NavBar").style.display = "none"
    } else {
        document.getElementById("NavBar").style.display = "block"
    }
});

const people = [
    {
        name: "Ana Beatriz",
        role: "Designer",
        imgSrc: "../img/Ana_teste02.png",
        github: "https://github.com/seu_usuario",
        linkedin: "https://www.linkedin.com/in/seu_usuario",
        email: "mailto:seu_email@gmail.com"
    },
    {
        name: "Davi",
        role: "Programador",
        imgSrc: "../img/Davi.png",
        github: "https://github.com/seu_usuario",
        linkedin: "https://www.linkedin.com/in/seu_usuario",
        email: "mailto:seu_email@gmail.com"
    },
    {
        name: "Guilherme",
        role: "Programador",
        imgSrc: "../img/Gui.png",
        github: "https://github.com/GuiCastro1",
        linkedin: "https://www.linkedin.com/in/guilherme-castro-0b987b304",
        email: "mailto:seu_email@gmail.com"
    },
    {
        name: "Mariana",
        role: "Programador",
        imgSrc: "../img/Mari.png",
        github: "https://github.com/seu_usuario",
        linkedin: "https://www.linkedin.com/in/seu_usuario",
        email: "mailto:gui.castro.0001.1426@gmail.com"
    },
    {
        name: "Fabiano",
        role: "Programador",
        imgSrc: "../img/Fabiano.png",
        github: "https://github.com/seu_usuario",
        linkedin: "https://www.linkedin.com/in/seu_usuario",
        email: "mailto:seu_email@gmail.com"
    },
    {
        name: "Sophia",
        role: "Programador",
        imgSrc: "../img/15.png",
        linkedin: "https://www.linkedin.com/in/seu_usuario",
        email: "mailto:seu_email@gmail.com"
    },
    {
        name: "Isadora",
        role: "Programador",
        imgSrc: "../img/16.png",
        linkedin: "https://www.linkedin.com/in/seu_usuario",
        email: "mailto:seu_email@gmail.com"
    },
    {
        name: "Luiz",
        role: "Programador",
        imgSrc: "../img/17.png",
        linkedin: "https://www.linkedin.com/in/seu_usuario",
        email: "mailto:seu_email@gmail.com"
    },
    {
        name: "Adriano",
        role: "Programador",
        imgSrc: "../img/18.png",
        linkedin: "https://www.linkedin.com/in/seu_usuario",
        email: "mailto:seu_email@gmail.com"
    },
    {
        name: "Vitor",
        role: "Programador",
        imgSrc: "../img/19.png",
        linkedin: "https://www.linkedin.com/in/seu_usuario",
        email: "mailto:seu_email@gmail.com"
    },
];

const cardContainer = document.getElementById('card-container');

people.forEach(person => {
    const card = document.createElement('div');
    card.classList.add('cards');
    
    let githubLink = '';
    if (person.github) {
        githubLink = `
            <a href="${person.github}" target="_blank">
                <i class="fab fa-github"></i> GitHub
            </a>
        `;
    }

    card.innerHTML = `
        <img src="${person.imgSrc}" alt="Foto de ${person.name}">
        <div class="content">
            <h3>${person.name} <br>${person.role}</h3>
            ${githubLink}
            <a href="${person.linkedin}" target="_blank">
                <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="${person.email}" target="_blank">
                <i class="fas fa-envelope"></i> E-mail
            </a>
        </div>
    `;
    
    cardContainer.appendChild(card);
});

console.log("O programa acabou!!!");
