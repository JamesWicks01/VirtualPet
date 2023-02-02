let petHealth = 100;
let petHunger = 100;
let petHappiness = 100;
let petCleanliness = 100;
let petTiredness = 100;

// Pet Health
function displayHealthValue() {
    const output = document.querySelector('#healthValue');
    output.value = petHealth;
}

// Pet Hunger
function displayHungerValue() {
    const output = document.querySelector('#hungerValue');
    output.value = petHunger;
}

function decreaseHungerValue() {
   petHunger = petHunger - 1;
   if (petHunger < 0) {
      petHunger = 0;
   }
   displayHungerValue();
}

function feedPet() {
   petHunger = petHunger + 10;
   if (petHunger > 100) {
      petHunger = 100;
   }
   displayHungerValue();
   decreaseHungerValue();
 }

// Pet Happiness
 function displayHappinessValue() {
    const output = document.querySelector('#happinessValue');
    output.value = petHappiness;
 }

 function decreaseHappinessValue() {
   petHappiness = petHappiness - 1;
   if (petHappiness < 0) {
      petHappiness = 0;
   }
   displayHappinessValue();
}

function playPet() {
   petHappiness = petHappiness + 10;
   if (petHappiness > 100) {
      petHappiness = 100;
   }
   displayHappinessValue();
   decreaseHappinessValue();
}

// Pet Cleanliness
 function displayCleanlinessValue() {
    const output = document.querySelector('#cleanlinessValue');
    output.value = petCleanliness;
 }

 function decreaseCleanlinessValue() {
   petCleanliness = petCleanliness - 1;
   if (petCleanliness < 0) {
      petCleanliness = 0;
   }
   displayCleanlinessValue();
}

function bathPet() {
   petCleanliness = petCleanliness + 10;
   if (petCleanliness > 100) {
      petCleanliness = 100;
   }
   displayCleanlinessValue();
   decreaseCleanlinessValue();
}

// Pet Tiredness
 function displayTirednessValue() {
    const output = document.querySelector('#tirednessValue');
    output.value = petTiredness;
 }

 function decreaseTirednessValue() {
   petTiredness = petTiredness - 1;
   if (petTiredness < 0) {
      petTiredness = 0;
   }
   displayTirednessValue();
}

function sleepPet() {
   petTiredness = petTiredness + 10;
   if (petTiredness > 100) {
      petTiredness = 100;
   }
   displayTirednessValue();
   decreaseTirednessValue();
}


function button() {
   const PetFeed = document.querySelector('#feed');
   PetFeed.addEventListener('click', feedPet);

   const PetPlay = document.querySelector('#play');
   PetPlay.addEventListener('click', playPet);

   const PetBath = document.querySelector('#bath');
   PetBath.addEventListener('click', bathPet);

   const PetSleep = document.querySelector('#sleep');
   PetSleep.addEventListener('click', sleepPet);

} 


function init() {
    displayHealthValue();
    displayHungerValue();
    displayHappinessValue();
    displayCleanlinessValue();
    displayTirednessValue();
    setInterval(decreaseHungerValue, 1000);
    setInterval(decreaseHappinessValue, 1000);
    setInterval(decreaseCleanlinessValue, 1000);
    setInterval(decreaseTirednessValue, 1000);
}


window.addEventListener('load', init);
window.addEventListener('load', button);




