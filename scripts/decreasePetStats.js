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

window.addEventListener('load', decreaseHungerValue);