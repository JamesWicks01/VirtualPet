function reset() {
  localStorage.clear();
  window.location.replace('/');
  console.log('RESET SUCCESSFUL');
}

function button() {
  const ResetButton = document.getElementById('reset');
  ResetButton.addEventListener('click', reset);
}

function init() {
  const pet = JSON.parse(localStorage.getItem('name'));
  const petName = document.getElementById('name');
  const petAliveTime = document.getElementById('timeAlive');
  petName.textContent = 'Your Pet ' + pet.name + ' is died.';
  petAliveTime.textContent = 'It was alive for ' + pet.aliveTime + ' minutes';
}

window.addEventListener('load', button);
window.addEventListener('load', init);
