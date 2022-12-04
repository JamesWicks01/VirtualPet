function decreaseHungerValue() {
    let petHunger = document.querySelector('#hunger').value--;
    console.log(petHunger);

    if(petHunger > 0) {
        setTimeout(decreaseHungerValue, 1000);
    } else if (petHunger === 0) {
        petHunger = 0;
    } else {
        console.error('Error with decreasingHungerValue');
    }
    
}

function decreaseTirednessValue() {
    let petTiredness = document.querySelector('#tiredness').value--;
    console.log(petTiredness);

    if(petTiredness > 0) {
        setTimeout(decreaseTirednessValue, 10000);
    } else if (petTiredness === 0) {
        petTiredness = 0;
    } else {
        console.error('Error with decreasingTirednessValue');
    }
}

window.addEventListener('load', decreaseHungerValue);
window.addEventListener('load', decreaseTirednessValue);
