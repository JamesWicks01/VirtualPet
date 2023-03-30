let pet = {
  aliveTime: 0,
  name: 'My Virtual Pet',
  deathtype: 'Unknown',
};

let petValues = {
  health: 100,
  hunger: 100,
  cleanliness: 100,
  energy: 100,
};

const happiness = () => {
  return Math.min(petValues.health, petValues.hunger, petValues.cleanliness, petValues.energy);
};

// Function to display the pet's values in a meter element on the pet screen.
function displayPetValue() {
  for (const [attr, value] of Object.entries(petValues)) {
    const output = document.querySelector(`#${attr}Value`);
    output.value = value;
  }
  const happinessOutput = document.querySelector('#happinessValue');
  happinessOutput.value = happiness();
}
// Function to decrease the pet's values with the value never going below zero.
function decreaseAttr(attr, decreaseValue) {
  petValues[attr] = Math.max(petValues[attr] - decreaseValue, 0);
  displayPetValue();
}

// Function to increase the pet's values with the value never going above one hundred.
function increaseAttr(attr, increaseValue) {
  petValues[attr] = Math.min(petValues[attr] + increaseValue, 100);
  displayPetValue();
}

// Function to decrease the pet's health when the hunger is below ten and to
// increase the pet's health when the hunger is above eighty.
function petHealth() {
  if (petValues.hunger <= 10) {
    decreaseAttr('health', 1);
  } else if (petValues.hunger >= 80) {
    increaseAttr('health', 1);
  }
}

// Function to determine the pet's cause of death.
function determineCauseOfDeath() {
  if (petValues.hunger === 0) {
    pet.deathtype = 'Starvation';
  } else if (petValues.energy === 0) {
    pet.deathtype = 'Lack of Sleep';
  } else {
    pet.deathtype = 'Unknown';
  }
}

// Function to when the health value equals to zero then the user is redirected to the pet's death screen.
function displayPetDeathAlert() {
  if (petValues.health === 0) {
    determineCauseOfDeath();
    savePetValues();
    window.location = 'deathscreen.html';
  }
}

// Function to save all the values of the pet in local storage in a JSON format.
function savePetValues() {
  localStorage.name = JSON.stringify(pet);
  localStorage.values = JSON.stringify(petValues);
  console.log(localStorage.length);
  console.log('SAVED VALUES');
}

// Function to load pet values from local storage when there is someting in local storage.
function loadPetValues() {
  if (localStorage.length > 0) {
    pet = JSON.parse(localStorage.getItem('name'));
    petValues = JSON.parse(localStorage.getItem('values'));
    console.log(localStorage.length);
    console.log('LOADED VALUES');
  } else {
    console.log('NO VALUES TO LOAD');
  }
}

// Function to state the time the pet has been alive for.
function petAlive() {
  pet.aliveTime = pet.aliveTime + 1;
}

// Function to set the pet's name and display it on the screen
function handleInput(e) {
  const output = document.querySelector('#name');
  pet.name = e.target.value;
  output.textContent = e.target.value;
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

  const ExitPet = document.querySelector('#exit');
  ExitPet.addEventListener('click', () => {
    window.location = '/';
    savePetValues();
  });

  // const PetPlay = document.querySelector('#play');
  // PetPlay.addEventListener('click', playPet);
}

// Fucntion that holds all the function that need to be executed on page loaded
function init() {
  displayPetValue();
  loadPetValues();
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
