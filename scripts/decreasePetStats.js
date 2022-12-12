let petHunger = 100;
let petTiredness = 100;
let petHappiness = 100;

function decreaseHungerValue() {
    const out = document.querySelector('#hungerValue');
    out.textContent = petHunger--;
    if (petHunger > 0) {
        setTimeout(decreaseHungerValue, 1000);
    } else if (petHunger === 0) {
        out.textContent = '0';
    } else {
        console.error("Error with decreaseHungerValue");
    }
}

function increaseHungerValue() {
    petHunger = 100;
}

function decreaseTirednessValue() {
    const out = document.querySelector('#tirednessValue');
    out.textContent = petTiredness--;
    if (petTiredness > 0) {
        setTimeout(decreaseTirednessValue, 1000);
    } else if (petTiredness === 0) {
        out.textContent = '0';
    } else {
        console.error("Error with decreaseTirednessValue");
    }
}

function decreaseHappinessValue() {
    const out = document.querySelector('#happinessValue');
    out.textContent = petHappiness--;
    if (petHappiness > 0) {
        setTimeout(decreaseHappinessValue, 1000);
    } else if (petHappiness === 0) {
        out.textContent = '0';
    } else {
        console.error("Error with decreaseHappinessValue");
    }
}

function init() {
    const Button = document.querySelector('#FeedMe');
    Button.addEventListener('click', increaseHungerValue);
}

window.addEventListener('load', init);


window.addEventListener('load', decreaseHungerValue);
window.addEventListener('load', decreaseTirednessValue);
window.addEventListener('load', decreaseHappinessValue);