document.getElementById("BodySizing").addEventListener("resize", function () {
    if (window.innerWidth >= 750) {
        document.getElementById("NavBar").style.display = "block"
    } else {
        document.getElementById("NavBar").style.display = "none"
    }
});
document.getElementById("BodySizing").addEventListener("resize", function () {
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
});


const people = [
    {
        name: "Ana Beatriz",
        role: "Designer",
        imgSrc: "img/Ana_teste02.png",
        github: "https://github.com/seu_usuario",
        linkedin: "https://www.linkedin.com/in/seu_usuario",
        email: "mailto:seu_email@gmail.com"
    },
    {
        name: "Davi",
        role: "Programador",
        imgSrc: "img/Davi.png",
        github: "https://github.com/seu_usuario",
        linkedin: "https://www.linkedin.com/in/seu_usuario",
        email: "mailto:seu_email@gmail.com"
    },
    {
        name: "Guilherme",
        role: "Programador",
        imgSrc: "img/Gui.png",
        github: "https://github.com/GuiCastro1",
        linkedin: "https://www.linkedin.com/in/guilherme-castro-0b987b304",
        email: "mailto:seu_email@gmail.com"
    },
    {
        name: "Mariana",
        role: "Programadora",
        imgSrc: "img/Mari.png",
        github: "https://github.com/seu_usuario",
        linkedin: "https://www.linkedin.com/in/seu_usuario",
        email: "mailto:gui.castro.0001.1426@gmail.com"
    },
    {
        name: "Fabiano",
        role: "Designer",
        imgSrc: "img/Fabiano.png",
        github: "https://github.com/seu_usuario",
        linkedin: "https://www.linkedin.com/in/seu_usuario",
        email: "mailto:seu_email@gmail.com"
    },
    {
        name: "Sophia",
        role: "CEO",
        imgSrc: "img/15.png",
        linkedin: "https://www.linkedin.com/in/sophia-carvalho-dos-anjos-b27b4120a/",
        email: "mailto:carvalho.sophia1406@gmail.com"
    },
    {
        name: "Isadora",
        role: "Diretora de Sucesso do Cliente",
        imgSrc: "img/16.png",
        linkedin: "https://www.linkedin.com/in/isadora-castro-cr/",
        email: "mailto: isadoracrdecastro@outlook.com"
    },
    {
        name: "Luiz",
        role: "Engenheiro DevOps",
        imgSrc: "img/17.png",
        linkedin: "https://www.linkedin.com/in/luiz-felipe-di-lorenzo-rossi-abb925308/",
        email: "mailto:dilorenzoluizinho7@gmail.com"
    },
    {
        name: "Adriano",
        role: "Engenheiro de Nuvem",
        imgSrc: "img/18.png",
        linkedin: "https://www.linkedin.com/in/adriano-cristiano-889192309/",
        email: "mailto: cristianoadriano376@gmail.com"
    },
    {
        name: "Vitor",
        role: "Desenvolvedor de Software",
        imgSrc: "img/19.png",
        linkedin: "https://www.linkedin.com/in/victor-hugo-f/",
        email: "mailto:victorhugo.santos00@outlook.com"
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

        Img: "img/TOPIA.png",
        alt: "fdgdg",
        NameProject: "Topia",
        Descrition: "A Topia é uma startup, que tem como visão tornar o mundo mais acessível para os deficientes visuais. São inspirados em criar soluções inovadoras, por isso desenvolvemos um dispositivo que poderia auxiliar os deficientes visuais a caminharem pelo mundo de maneira independente e segura.",
        LinkProject: "https://www.linkedin.com/in/seu_usuario"
    },
    {

        Img: "img/4.png",
        alt: "fdgdg",
        NameProject: "Landing Page Tarantino",
        Descrition: "Quentin Tarantino, ator e diretor de grandes sucessos do cinema, contratou a Fluxus para desenvolver um site para a Red Apple, sua marca de cigarros fictícia que sempre aparece em seus filmes. O site servirá como um atrativo para divulgar seu último filme, que já tem data para sair do papel.",
        LinkProject: "https://www.linkedin.com/in/seu_usuario"
    },
    {

        Img: "img/REUSEDECOR.png",
        alt: "fdgdg",
        NameProject: "Reusedecor",
        Descrition: "No final de cada ano, nossa empresa promove um desafio: o desenvolvedor que criar o melhor site ganha um bônus de fim de ano e duas semanas de férias. No último desafio, tivemos cinco grandes projetos competindo na final. Confira os sites dos participantes. Passe o cursor sobre a imagem da empressa Redusedecor.",
        LinkProject: "https://www.linkedin.com/in/seu_usuario"
    }
];
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
    titulo.id = "Titulo"
    titulo.textContent = Itens.NameProject;

    // Cria os links
    const Descrition = document.createElement('p');
    Descrition.textContent = Itens.Descrition;


    const siteLink = document.createElement('a');
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

});

const Clients = [
    {
        IMG: "img/MJ.jpg",
        alt: "Imagem do Cliente Michael Jackson",
        Name: "Michael Jackson",
        Descrition: "Estou extremamente satisfeito com o serviço prestado. A equipe é super profissional e atenciosa. Recomendo!"
    },
    {
        IMG: "img/travis.jpg",
        alt: "Imagem do Cliente Travis Bickle",
        Name: "Travis Bickle",
        Descrition: "O atendimento ao cliente é simplesmente impecável. Resolveram meu problema rapidamente e com muita simpatia. Parabéns pela excelência!"
    },
    {
        IMG: "img/django.jpg",
        alt: "Imagem do Cliente Django",
        Name: "Django",
        Descrition: "O serviço oferecido superou todas as minhas expectativas. Rápido, eficiente e com um atendimento de primeira. Com certeza, voltarei a utilizar."
    },
    {
        IMG: "img/WW.jpg",
        alt: "Imagem da Cliente Whitney Houston",
        Name: "Whitney Houston",
        Descrition: "A qualidade do serviço é excepcional. Cada detalhe foi pensado com muito cuidado, e o resultado final foi incrível. Muito obrigada!"
    },
    {
        IMG: "img/anne.jpg",
        alt: "Imagem da Cliente Anne Hathaway",
        Name: "Anne Hathaway",
        Descrition: "Fiquei muito satisfeito com o serviço. A equipe é extremamente competente e atenciosa. Recomendo fortemente!"
    },
    {
        IMG: "img/rochelle.jpg",
        alt: "Imagem da Cliente Rochelle",
        Name: "Rochelle",
        Descrition: "O profissionalismo e a dedicação da equipe são notáveis. Desde o primeiro contato até a finalização do serviço, tudo foi perfeito. Continuem assim!"
    }

];
const DivClients = document.getElementById("Card-Clients")
Clients.forEach(teste => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = teste.IMG;
    img.alt = teste.alt;

    const titulo = document.createElement('h3');
    titulo.id = "Titulo"
    titulo.textContent = teste.Name;

    const Descrition = document.createElement('p');
    Descrition.textContent = teste.Descrition;

    card.appendChild(img)
    card.appendChild(titulo)
    card.appendChild(Descrition)

    DivClients.appendChild(card)
});

console.log("O programa acabou!!!");