const pet = {
  aliveTime: 0,
  name: 'My Pet',
};

const petValues = {
  health: 100,
  hunger: 100,
  cleanliness: 100,
  energy: 100,
};

const happiness = () => {
  return Math.min(petValues.health, petValues.hunger, petValues.cleanliness, petValues.energy);
};

// Function to display the pet's values on the screen
function displayPetValue() {
  for (const [attr, value] of Object.entries(petValues)) {
    const output = document.querySelector(`#${attr}Value`);
    output.value = value;
  }
  const happinessOutput = document.querySelector('#happinessValue');
  happinessOutput.value = happiness();
}
// Function to decrease the pet's values
function decreaseAttr(attr, decreaseValue) {
  petValues[attr] = Math.max(petValues[attr] - decreaseValue, 0);
  displayPetValue();
}

// Function to increase the pet's values
function increaseAttr(attr, increaseValue) {
  petValues[attr] = Math.min(petValues[attr] + increaseValue, 100);
  displayPetValue();
}

// Function to decrease and increase the pet's health value
function petHealth() {
  if (petValues.hunger <= 10) {
    decreaseAttr('health', 1);
  } else if (petValues.hunger >= 80) {
    increaseAttr('health', 1);
  }
}

// Pet Death Alert
function displayPetDeathAlert() {
  if (petValues.health === 0) {
    const myImage = document.querySelector('#pet');
    myImage.src = 'assets/grave-stone.svg';
    // setTimeout(500);
    // window.alert('Your Pet has survived for ' + pet.aliveTime + ' minutes');
  }
}

// Function to get how long the pet is alive
function petAlive() {
  pet.aliveTime = pet.aliveTime + 1;
}

// Function to set the pet's name and display it on the screen
function handleInput(e) {
  const output = document.querySelector('#name');
  pet.name = e.target.value;
  output.textContent = e.target.value;
}


// Function to save the pet's values
function savePetValues() {
  localStorage.clear();
  localStorage.name = JSON.stringify(pet);
  localStorage.value = JSON.stringify(petValues);
}

// Function to make the buttons on the page functional
function button() {
  const FeedPet = document.querySelector('#feed');
  FeedPet.addEventListener('click', () => {
    increaseAttr('hunger', 10);
  });

  const BathPet = document.querySelector('#bath');
  BathPet.addEventListener('click', () => {
    increaseAttr('cleanliness', 10);
  });

  const SleepPet = document.querySelector('#sleep');
  SleepPet.addEventListener('click', () => {
    increaseAttr('energy', 10);
  });

  // const PetPlay = document.querySelector('#play');
  // PetPlay.addEventListener('click', playPet);
}

// Fucntion that holds all the function that need to be executed on page loaded
function init() {
  displayPetValue();
  setInterval(decreaseAttr, 2000, 'hunger', 1);
  setInterval(decreaseAttr, 6000, 'cleanliness', 1);
  setInterval(decreaseAttr, 6000, 'energy', 1);
  setInterval(displayPetDeathAlert, 1000);
  setInterval(savePetValues, 10000);
  setInterval(petAlive, 60000);
  setInterval(petHealth, 1000);
  // Changes name of pet
  const namechange = document.querySelector('#namechange');
  namechange.addEventListener('input', handleInput);
  // Display the default pet's name when page is loaded
  const petName = document.querySelector('#name');
  petName.textContent = pet.name;
}


window.addEventListener('load', init);
window.addEventListener('load', button);
