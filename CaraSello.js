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


    if (i) {
        setTimeout(function() {
            imgs.style.animation = "spin-heads 4s forwards";
        }, 100);
        heads++;
    } else {
        setTimeout(function() {
            imgs.style.animation = "spin-tails 4s forwards";
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
    setTimeout(function() {
        flip.disabled = false;
    }, 3000);
}