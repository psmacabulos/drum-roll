// Select all the buttons

let buttons = document.querySelectorAll('button');

// Loop over the buttons and assign a sound when clicked

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    let letter = this.innerText;
    checkButton(letter);
  });
});

// Listen to the whole document for keydown and play a sound if
// one of the letters are pressed

document.addEventListener('keydown', function (event) {
  checkButton(event.key);
});

// Function to check if the button 'letter' is selected and play the sound
// accordingly

function checkButton(letter) {
  switch (letter) {
    case 'w':
      let crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;
    case 'a':
      let kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;
    case 's':
      let snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;
    case 'd':
      let tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      let tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'k':
      let tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'l':
      let tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;
    default: {
      console.log(this);
    }
  }
}
