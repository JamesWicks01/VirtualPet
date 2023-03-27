function start() {
  window.location = 'petscreen.html';
  console.log('START SUCCESSFUL');
}

function init() {
  const StartButton = document.querySelector('#start');
  StartButton.addEventListener('click', start);
}

window.addEventListener('load', init);
