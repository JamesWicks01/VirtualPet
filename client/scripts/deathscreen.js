// Function to clear local storage and to change the state of page
function reset() {
  localStorage.clear();
  window.location = 'petscreen.html';
  console.log('RESET SUCCESSFUL');
}

// Function to make the button functionable on the page.
function button() {
  const ResetButton = document.getElementById('reset');
  ResetButton.addEventListener('click', reset);
}

// Fucntion that holds all the function that need to be executed on page loaded.
// Including the loading of values from local storage and displaying them on the screen.
function init() {
  const pet = JSON.parse(localStorage.getItem('name'));
  const petName = document.getElementById('name');
  const petAliveTime = document.getElementById('timeAlive');
  const petCauseOfDeath = document.getElementById('CauseOfDeath');
  petCauseOfDeath.textContent = 'Cause of death: ' + pet.deathtype;
  petName.textContent = 'Your Pet ' + pet.name + ' is died.';
  petAliveTime.textContent = 'It was alive for ' + pet.aliveTime + ' minutes';
}

window.addEventListener('load', button);
window.addEventListener('load', init);
