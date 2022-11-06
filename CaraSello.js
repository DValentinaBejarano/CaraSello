let flip = document.querySelector('.flip');
let reset = document.querySelector('.reset');
let imgs = document.querySelector('.imgs');
let coin = new Audio("https://dl.dropbox.com/s/jatksxap32j6b9d/coin-drop.mp3?dl=0")

let faces = document.querySelector('.faces');
let backs = document.querySelector('.backs');
let heads = tails = 0;
initialisation();


reset.addEventListener("click", () => {
    window.location.reload(true);
    heads = 0;
    tails = 0;
    initialisation();
})

function initialisation() {
    faces.innerHTML = `Cara: ${heads}`
    backs.innerHTML = `Sello: ${tails}`
}

function updateStats() {
    faces.innerHTML = `Cara: ${heads}`
    backs.innerHTML = `Sello: ${tails}`
}

function disableBtn() {
    flip.disabled = true;
    setTimeout(function () {
        flip.disabled = false;
    }, 3000);
}

//Ingresar nombre de usuario
let nombre
let edad
const container = document.getElementById("container");
const main = document.getElementById("main");
const caja = document.getElementById("caja");
nombre = prompt("Digite su nombre completo: ");
edad = prompt("Ingrese su edad");

if (edad >= 18) {
    let contador = 0, operacion = 0;
    alert("Usted es mayor de edad, puede jugar y apostar las veces que desee ¡Que disfrute el juego!");
    console.log(`Usted es mayor de edad, puede jugar y apostar las veces que desee ¡Que disfrute el juego!`)
    flip.addEventListener("click", () => {
        let i = Math.floor(Math.random() * 2);
        imgs.style.animation = "none";
        setTimeout(coin.play(), 3000);
        const mensaje = document.getElementById("mensaje");
        const mensaje1 = document.getElementById("mensaje1");

        let seleccion;
        contador++;
        seleccion = prompt("¿Qué opción desea elegir: 1. Cara 2. Sello")
        if (i) {
            let apuesta = document.getElementById("apuesta").value;
            apuesta = parseFloat(apuesta)
            setTimeout(function () {
                imgs.style.animation = "spin-heads 4s forwards";
                if (i == seleccion) {
                    mensaje1.classList.replace('active', 'mensaje1')
                    mensaje.classList.replace('mensaje', 'active')
                    operacion = operacion + apuesta*2;
                } else {
                    mensaje.classList.replace('active', 'mensaje')
                    mensaje1.classList.replace('mensaje1', 'active')
                    operacion = operacion - apuesta;
                }
            }, 100);
            heads++;
        } else {
            let apuesta = document.getElementById("apuesta").value;
            apuesta = parseFloat(apuesta)
            setTimeout(function () {
                imgs.style.animation = "spin-tails 4s forwards";
                if (i == seleccion) {
                    mensaje1.classList.replace('active', 'mensaje1')
                    mensaje.classList.replace('mensaje', 'active')
                    operacion = operacion + apuesta*2;
                } else {
                    mensaje.classList.replace('active', 'mensaje')
                    mensaje1.classList.replace('mensaje1', 'active')
                    operacion = operacion - apuesta;
                }

            }, 100);
            tails++;
        }
        setTimeout(updateStats, 3000);
        disableBtn();

        main.classList.replace('mainActivo', 'main');
        caja.classList.replace('cajaActivo', 'caja');
      
    })
    const finalizar = document.getElementById("terminar");
    finalizar.addEventListener('click', () => {
        alert(`${nombre}, usted tiene un acumulado de ${operacion}, y las veces que jugó fueron: ${contador}`)

    })
} else if (edad <= 0) {
    alert("Ingrese un valor real");
    console.log(`Ingrese un valor real`);
    container.classList.replace('container', 'containerOculto');
    main.classList.replace('main', 'mainActivo');
    caja.classList.replace('caja', 'cajaActivo');
} else {
    alert("Usted es menor de edad, no le es permitido jugar");
    console.log(`Usted es menor de edad, no le es permitido jugar`);
    container.classList.replace('container', 'containerOculto');
    main.classList.replace('main', 'mainActivo');
    caja.classList.replace('caja', 'cajaActivo');
}



