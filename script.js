// Hamburguer itens
const iconeHamburguer = document.querySelector('.icone-hamburger');

// Carrosel itens
const carrosel = document.querySelector('.carrosel');

// Validation itens
const emailResume = document.querySelector('.emailResume').value;
const btnResume = document.querySelector('#resumeBTN');

/* const btnContact = document.querySelector('#'); */


// Hamburguer Functions
const hamburguerTogle = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

const lightDark = () => {
   const icon = document.querySelector(".dark-light")
}

iconeHamburguer.addEventListener('click',hamburguerTogle);


// Carrosel Functions
const carroselScroll = (verify) => {
    if(verify){
     carrosel.scrollBy(300,0)
    }else if (!verify) {
        carrosel.scrollBy(-300, 0)
    }   
}

// Validation function