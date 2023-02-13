const petHealth = 100;
let petHunger = 100;
let petHappiness = 100;
let petCleanliness = 100;
let petTiredness = 100;

// Function to display the pet's values on the screen
function displayPetValue(element, petValue) {
  const output = document.querySelector(element);
  output.value = petValue;
}

// function decreasePetValue(petValue, decreaseValue, valueLimit, element) {
//    petValue = petValue - decreaseValue;
//    if (petValue < valueLimit) {
//       petValue = valueLimit;
//    }
//    displayPetValue(element, petValue);

// }

// function increasePetValue(petValue, increaseValue, valueLimit, element) {
//    petValue = petValue + increaseValue;
//    if (petValue > valueLimit) {
//       petValue = valueLimit;
//    }
//    displayPetValue(element, petValue);
// }


// Functions that will decrease the pet's values
// Function that decreases the pet's hunger value by one and will stay at zero when the value hits zero
function decreaseHungerValue() {
  petHunger = petHunger - 1;
  if (petHunger < 0) {
    petHunger = 0;
  }
  displayPetValue('#hungerValue', petHunger);
}

// Function that decreases the pet's happiness value by one and will stay at zero when the value hits zero
function decreaseHappinessValue() {
  petHappiness = petHappiness - 1;
  if (petHappiness < 0) {
    petHappiness = 0;
  }
  displayPetValue('#happinessValue', petHappiness);
}

// Function that decreases the pet's cleanliness value by one and will stay at zero when the value hits zero
function decreaseCleanlinessValue() {
  petCleanliness = petCleanliness - 1;
  if (petCleanliness < 0) {
    petCleanliness = 0;
  }
  displayPetValue('#cleanlinessValue', petCleanliness);
}

// Function that decreases the pet's tiredness value by one and will stay at zero when the value hits zero
function decreaseTirednessValue() {
  petTiredness = petTiredness - 1;
  if (petTiredness < 0) {
    petTiredness = 0;
  }
  displayPetValue('#tirednessValue', petTiredness);
}


// Fucntions that increase the pet's values
// Function that increases the pet's hungry value by ten and will stay at 101 when the value hits 100
function feedPet() {
  petHunger = petHunger + 10;
  if (petHunger > 100) {
    petHunger = 101;
  }
  displayPetValue('#hungerValue', petHunger);
  decreaseHungerValue();
}

// Function that increases the pet's happiness value by 10 and will stay at 101 when the value hits 100
function playPet() {
  petHappiness = petHappiness + 10;
  if (petHappiness > 100) {
    petHappiness = 101;
  }
  displayPetValue('#happinessValue', petHappiness);
  decreaseHappinessValue();
}

// Function that increases the pet's cleanliness value by 10 and will stay at 100 when the value hits 100
function bathPet() {
  petCleanliness = petCleanliness + 10;
  if (petCleanliness > 100) {
    petCleanliness = 101;
  }
  displayPetValue('#cleanlinessValue', petCleanliness);
  decreaseCleanlinessValue();
}

// Function that increases the pet's cleanliness value by 10 and will stay at 100 when the value hits 100
function sleepPet() {
  petTiredness = petTiredness + 10;
  if (petTiredness > 100) {
    petTiredness = 101;
  }
  displayPetValue('#tirednessValue', petTiredness);
  decreaseTirednessValue();
}

// Fucntion to save the pet's values
function savePetValues() {
  localStorage.clear();
  localStorage.setItem('health', petHealth);
  localStorage.setItem('hunger', petHunger);
  localStorage.setItem('happiness', petHappiness);
  localStorage.setItem('cleanliness', petCleanliness);
  localStorage.setItem('tiredness', petTiredness);
}


// Function to make the buttons on the page functional
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

// Fucntion that holds all the function that need to be executed on page loaded
function init() {
  displayPetValue('#healthValue', petHealth);
  displayPetValue('#hungerValue', petHunger);
  displayPetValue('#happinessValue', petHappiness);
  displayPetValue('#cleanlinessValue', petCleanliness);
  displayPetValue('#tirednessValue', petTiredness);
  setInterval(decreaseHungerValue, 1000);
  setInterval(decreaseHappinessValue, 1000);
  setInterval(decreaseCleanlinessValue, 1000);
  setInterval(decreaseTirednessValue, 1000);

  setInterval(savePetValues, 10000);
}


window.addEventListener('load', init);
window.addEventListener('load', button);
