// Function to redirect the user to the pet screen when the fucntion is called.
function start() {
  window.location = 'petscreen.html';
  console.log('START SUCCESSFUL');
}

// Function the makes the start button functionable and when the user clicks it
// will call the start function.
function init() {
  const StartButton = document.querySelector('#start');
  StartButton.addEventListener('click', start);
}

window.addEventListener('load', init);
