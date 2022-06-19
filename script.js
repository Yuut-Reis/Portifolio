const iconeHamburguer = document.querySelector('.icone-hamburger');
const carrosel = document.querySelector('.carrosel');

const hamburguerTogle = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

const lightDark = () => {
   const icon = document.querySelector(".dark-light")
}

const carroselScroll = (verify) => {
    if(verify){
     carrosel.scrollBy(300,0)
    }else if (!verify) {
        carrosel.scrollBy(-300, 0)
    }   
}

iconeHamburguer.addEventListener('click',hamburguerTogle);
