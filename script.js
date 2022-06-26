// Hamburguer itens
const iconeHamburguer = document.querySelector('.icone-hamburger');

// Carrosel itens
const carrosel = document.querySelector('.carrosel');

// Validation itens
const emailResume = document.querySelector('.emailResume').value;
const btnResume = document.querySelector('#resumeBTN');

// Progress skill itens
const barra = document.querySelectorAll('.levelProgressFull');
const levelNumber = document.querySelectorAll('.percent');

// Progress skills Functions


const progress = () => {   
    barra.forEach((element, index) => {element.style.width = levelNumber[index].innerText})
}

const progress2 = () => {   
    barra.forEach((element) => {element.classList.remove('levelProgressFull')
        setInterval(() => {element.classList.add('levelProgressFull')}, 300); clearInterval() })
}




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

window.onload = () => {progress()};
// Validation function