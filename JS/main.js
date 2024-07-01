function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./img/close_white_36dp.svg";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelector('.slider');
    var lista = slider.querySelector('.lista');
    var items = slider.querySelectorAll('.item');
    var trazButton = document.getElementById('traz');
    var frenteButton = document.getElementById('frnte');
    var pontos = slider.querySelectorAll('.pontos li');
    var ativo = 0;

    function atualizarPontos() {
        pontos.forEach(function(point, index) {
            point.classList.remove('ativo');
            if (index === ativo) {
                point.classList.add('ativo');
            }
        });
    }

    trazButton.addEventListener('click', function() {
        ativo--;
        if (ativo < 0) {
            ativo = items.length - 1;
        }
        lista.style.left = `-${items[ativo].offsetWidth * ativo}px`;
        atualizarPontos();
    });

    frenteButton.addEventListener('click', function() {
        ativo++;
        if (ativo >= items.length) {
            ativo = 0;
        }
        lista.style.left = `-${items[ativo].offsetWidth * ativo}px`;
        atualizarPontos();
    });

    atualizarPontos();
});

