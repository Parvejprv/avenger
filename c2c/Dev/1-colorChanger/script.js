// function to change the background color of the body
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}


const greyButton = document.querySelector('#grey')
const whiteButton = document.querySelector('#white')
const blueButton = document.querySelector('#blue')
const yellowButton = document.querySelector('#yellow');

// Add click event listener to the color buttons
greyButton.addEventListener('click', () => {
  changeBackgroundColor('#ccc');
})
whiteButton.addEventListener('click', () => {
  changeBackgroundColor('#fff');
})
blueButton.addEventListener('click', () => {
  changeBackgroundColor("#3498db");  
})
yellowButton.addEventListener('click', () => {
  changeBackgroundColor('#f1c40f');
})








/*

With transform each span tag separately when click on that span


// function to change the background color of the body
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

function rotateAndReset(element){
  element.style.transform = 'rotate(45deg)';

  setTimeout(function () {
    element.style.transform = 'rotate(0deg)';
  }, 1000);
}


const greyButton = document.querySelector('#grey')
const whiteButton = document.querySelector('#white')
const blueButton = document.querySelector('#blue')
const yellowButton = document.querySelector('#yellow');

// Add click event listener to the color buttons
greyButton.addEventListener('click', function () {
  changeBackgroundColor('#ccc');
  rotateAndReset(this);
})
whiteButton.addEventListener('click', function () {
  changeBackgroundColor('#fff');
  rotateAndReset(this);
})
blueButton.addEventListener('click', function () {
  changeBackgroundColor("#3498db");  
  rotateAndReset(this);
})
yellowButton.addEventListener('click', function () {
  changeBackgroundColor('#f1c40f');
  rotateAndReset(this);
})


*/