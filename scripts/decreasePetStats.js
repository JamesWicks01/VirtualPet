let PetHungerCurrent = 100;
let petTiredness = 100;
let petHappiness = 100;

function decreaseHungerValue() {
    let PetHungerValue = document.querySelector('#hungerValue');
    PetHungerValue.value = PetHungerCurrent--;
    if (PetHungerCurrent > 0) {
        setTimeout(decreaseHungerValue, 1000);
    } else if (PetHungerCurrent === 0) {
        PetHungerCurrent = 0;
    } else {
        console.error("Error with decreaseHungerValue");
    }
}

function increaseHungerValue() {
    PetHungerCurrent = PetHungerCurrent + 10;
}

function decreaseTirednessValue() {
    let PetTirednessCurrent = document.querySelector('#tirednessValue').value--;
    if (PetTirednessCurrent > 0) {
        setTimeout(decreaseTirednessValue, 1000);
    } else if (PetTirednessCurrent === 0) {
        PetTirednessCurrent = 0;
    } else {
        console.error("Error with decreaseTirednessValue");
    }
}

function increaseTirednessValue() {
    petTiredness = 100;
}

function decreaseHappinessValue() {
    let PetHappinessValue = document.querySelector('#happinessValue').value--;
    if (PetHappinessValue  > 0) {
        setTimeout(decreaseHappinessValue, 1000);
    } else if (PetHappinessValue  === 0) {
        PetHappinessValue = 100;
    } else {
        console.error("Error with decreaseHappinessValue");
    }
}

function increaseHappinessValue() {
    petHappiness = 100;
}

function init() {
    const Button = document.querySelector('#FeedMe');
    Button.addEventListener('click', increaseHungerValue);

    const Button1 = document.querySelector('#GoToBed');
    Button1.addEventListener('click', increaseTirednessValue);

    const Button2 = document.querySelector('#PlayWithMe');
    Button2.addEventListener('click', increaseHappinessValue);
}

window.addEventListener('load', init);


window.addEventListener('load', decreaseHungerValue);
window.addEventListener('load', decreaseTirednessValue);
window.addEventListener('load', decreaseHappinessValue);