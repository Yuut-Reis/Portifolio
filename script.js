const iconeHamburguer = document.querySelector('.icone-hamburger')
const hamburguerTogle = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

const lightDark = () => {
   const icon = document.querySelector(".dark-light")
   
}

iconeHamburguer.addEventListener('click',hamburguerTogle);