document.getElementById("BodySizing").addEventListener("onresize", function () {
    if (window.innerWidth >= 750) {
        document.getElementById("NavBar").style.display = "block"
    } else {
        document.getElementById("NavBar").style.display = "none"
    }
});
document.getElementById("BodySizing").addEventListener("onresize", function () {
    if (window.innerWidth >= 750) {
        document.querySelector(".FirstTitle").style.display = "block"
    } else {
        document.querySelector(".FirstTitle").style.display = "none"
    }
});

document.getElementById("Menu").addEventListener("click", function () {

    if (document.getElementById("NavBar").style.display == "block") {

        document.getElementById("NavBar").style.display = "none"
    } else {
        document.getElementById("NavBar").style.display = "block"
    }
});
document.getElementById("Close").addEventListener("click", function () {
    if (document.getElementById("NavBar").style.display = "block") {
        document.getElementById("NavBar").style.display = "none"
    }
})


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
        role: "Programadora",
        imgSrc: "../img/Mari.png",
        github: "https://github.com/seu_usuario",
        linkedin: "https://www.linkedin.com/in/seu_usuario",
        email: "mailto:gui.castro.0001.1426@gmail.com"
    },
    {
        name: "Fabiano",
        role: "Designer",
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

const Projects = [
    {
        
        Img: "../img/Topia.png",
        NameProject: "Topia",
        Descrition: "lohhfghsdfsghfgsfvvbvbfdsvd  vfvshf hvfhvhsfd bhsfbdvhfsdbhvsbhfvbs  bfhsjvfhbsvf fdbfvhjdfbvshjdbvdhjfbvhjdfhvfd hfb hsvb hs   vhdsvjhvb hsvs  f ssv hj vhjsbvbv vhfb vhsb",
        LinkProject: "https://www.linkedin.com/in/seu_usuario"
    },
    {
        
        Img: "../img/RA.jpg",
        NameProject: "Reusedecor",
        Descrition: "lohhfghsdfsghfgsfvvbvbfdsvd  vfvshf hvfhvhsfd bhsfbdvhfsdbhvsbhfvbs  bfhsjvfhbsvf fdbfvhjdfbvshjdbvdhjfbvhjdfhvfd hfb hsvb hs   vhdsvjhvb hsvs  f ssv hj vhjsbvbv vhfb vhsb",
        LinkProject: "https://www.linkedin.com/in/seu_usuario"
    },
    {
        
        Img: "../img/Redusedecor.png",
        NameProject: "Landing Page Tarantino",
        Descrition: "lohhfghsdfsghfgsfvvbvbfdsvd  vfvshf hvfhvhsfd bhsfbdvhfsdbhvsbhfvbs  bfhsjvfhbsvf fdbfvhjdfbvshjdbvdhjfbvhjdfhvfd hfb hsvb hs   vhdsvjhvb hsvs  f ssv hj vhjsbvbv vhfb vhsb",
        LinkProject: "https://www.linkedin.com/in/seu_usuario"
    }
]
const DivProjects = document.querySelector(".Projects")
Projects.forEach(Itens => {

    const DivItems = document.createElement("div")
    DivItems.classList.add("Items")

   
    // Cria a imagem
    const img = document.createElement('img');
    img.classList.add("ImgsProjects")
    img.src = Itens.Img;
    img.alt = Itens.alt;  // Atribui o texto alternativo

    const titulo = document.createElement('h2');
    // titulo.classList.add("Teste")
    titulo.id="Titulo"
    titulo.textContent = Itens.NameProject;

    // Cria os links
    const Descrition = document.createElement('p');
    Descrition.classList.add("Teste")
    Descrition.textContent = Itens.Descrition;
  

    const siteLink = document.createElement('a');
    // siteLink.classList.add("Teste")
    siteLink.href = Itens.LinkProject;
    siteLink.textContent = 'site';
    siteLink.target = '_blank';


     // Adiciona a imagem e os links dentro da div.filho
     
    //  DivItems.appendChild(img);
     DivItems.appendChild(titulo);  
     DivItems.appendChild(Descrition);
     DivItems.appendChild(siteLink);

     // Adiciona a div.filho dentro da div.pai
     DivProjects.appendChild(img)
     DivProjects.appendChild(DivItems);
     
})

console.log("O programa acabou!!!");
