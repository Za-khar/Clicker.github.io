let clicks = 0;

const TIMEOUT = 5000;

let topp = 0;

let display = document.querySelector('#display');
let button = document.querySelector('#button');
let counter = document.querySelector('#counter');
counter.textContent = 'Number of clicks: 0';
let topa = document.querySelector('#top');
topa.textContent = 'Best resault: 0';
let choose = document.querySelector('#choose');

let repeata = document.createElement('button');
choose.appendChild(repeata);
let anew = document.createElement('button');
choose.appendChild(anew);

removeButton();

console.log(counter);

button.onclick = start;

display.textContent = 'Time 5.00';

function start() {
    const startTime = Date.now();
    display.textContent = 'Time ' + formatTime(TIMEOUT);
    button.onclick = () => counter.textContent = 'Number of clicks: ' + (clicks++);
    

    const interval = setInterval(() => {
        const delta = Date.now() - startTime;
        display.textContent = 'Time ' + formatTime(TIMEOUT - delta);
    }, 100);


    const timeout = setTimeout(() => {
        button.onclick = null;
        display.textContent = 'Game Over';
        addButton();
        repeat();
        if(clicks >= topp) {
            topp = clicks - 1;
            topa.textContent = 'Best resault: ' + topp;
        }
        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT)
}

function addButton() {
    repeata.classList.remove('non');
    anew.classList.remove('non');
    repeata.classList.add('repeat');
    repeata.textContent = 'Continue';
    anew.classList.add('repeat');
    anew.textContent = 'Start over';
}

function removeButton() {
    repeata.classList.remove('repeat');
    anew.classList.remove('repeat');
    repeata.classList.add('non');
    anew.classList.add('non');
    repeata.textContent = '';
    anew.textContent = '';
}

function repeat() {
    repeata.addEventListener("click", function(){
        removeButton();
        counter.textContent = 'Number of clicks: ' + clicks;
        clicks = 0;
        button.onclick = start;
    });
    anew.addEventListener("click", function(){
        removeButton();
        clicks = 0;
        counter.textContent = 'Number of clicks: ' + clicks;
        topp = 0;
        topa.textContent = 'Best resault: ' + topp;
        button.onclick = start;
    });
}




function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);
}


