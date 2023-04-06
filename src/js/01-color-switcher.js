const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerForChangeColor = null;

startBtn.addEventListener('click', () => {
  timerForChangeColor = setInterval(clickOnStart, 1000);
});
stopBtn.addEventListener('click', clickOnStop);

function clickOnStart(event) {
  startBtn.setAttribute('disabled', 'disabled');
  stopBtn.removeAttribute('disabled', 'disabled');

  const randomColor = `${getRandomHexColor()}`;

  document.body.style.backgroundColor = randomColor;
}
function clickOnStop(event) {
  this.setAttribute('disabled', 'disabled');
  clearInterval(timerForChangeColor);
  startBtn.removeAttribute('disabled', 'disabled');
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
