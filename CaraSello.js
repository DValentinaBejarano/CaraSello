let flip = document.querySelector('.flip');
let reset = document.querySelector('.reset');
let imgs = document.querySelector('.imgs');
let coin = new Audio("https://dl.dropbox.com/s/jatksxap32j6b9d/coin-drop.mp3?dl=0")

let faces = document.querySelector('.faces');
let backs = document.querySelector('.backs');
let heads = tails = 0;
initialisation();



flip.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    imgs.style.animation = "none";
    setTimeout(coin.play(), 3000);
    const mensaje=document.getElementById("mensaje")
    const mensaje1=document.getElementById("mensaje1")

    let seleccion
    seleccion = prompt("¿Qué opción desea elegir: 1. Cara 2. Sello")
    if (i) {
        setTimeout(function () {
            imgs.style.animation = "spin-heads 4s forwards";
            if (i == seleccion) {
                mensaje1.classList.replace('active', 'mensaje1')
                mensaje.classList.replace('mensaje', 'active')
            } else {
                mensaje.classList.replace('active', 'mensaje')
                mensaje1.classList.replace('mensaje1', 'active')
            }
        }, 100);
        heads++;
    } else {
        setTimeout(function () {
            imgs.style.animation = "spin-tails 4s forwards";
            if (i == seleccion) {
                mensaje1.classList.replace('active', 'mensaje1')
                mensaje.classList.replace('mensaje', 'active')
            } else {
                mensaje.classList.replace('active', 'mensaje')
                mensaje1.classList.replace('mensaje1', 'active')
            }

        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableBtn();


})

reset.addEventListener("click", () => {
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

let nombre
let edad
nombre = prompt("Digite su nombre completo: ");
edad = prompt("Ingrese su edad");

if (edad >= 18) {
    alert("Usted es mayor de edad, puede jugar y apostar las veces que desee ¡Que disfrute el juego!");
    console.log(`Usted es mayor de edad, puede jugar y apostar las veces que desee ¡Que disfrute el juego!`)
} else if (edad <= 0) {
    alert("Ingrese un valor real");
    console.log(`Ingrese un valor real`)
} else {
    alert("Usted es menor de edad, no le es permitido jugar");
    console.log(`Usted es menor de edad, no le es permitido jugar`)
}










// Juego funcionalidad 
let opcionMaquina = (int)(Math.random() * 2) + 1;
let seguir = 1, contador, total = 0, suma = 1;
let cont = "";

for (contador = 0; contador < suma; contador++) {

    alert("Ingrese el dinero que apostara en el juego");
    let apuesta = lectura.nextInt();

    System.out.println("Seleccione: \n 1. Sello \n 2. Cara");
    let opcionUs = lectura.nextInt();

    if (opcionUs == opcionMaquina) {
        alert("Usted ha sido el ganador" + cont);
        total += apuesta * 2;
        alert("Usted acumulo:: " + total);
    }
    else {
        alert("Usted perdió, siga intentandolo" + cont);
        total = apuesta - apuesta;
        alert("Usted acumulo: " + total);
    }
    alert("Si usted desea jugar digite 1, si desea salir digite 2");
    seguir = lectura.nextInt();

    if (seguir == 1) {
        suma++;
    }
}

if (seguir == 2) {
    alert("Usted ha ganado en total: " + total);
    alert("Las veces que usted jugó fueron: " + contador);
}
else if (seguir > 2) {

}
