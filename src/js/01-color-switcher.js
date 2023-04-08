const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerForChangeColor = null;

startBtn.addEventListener('click', clickOnStart);
stopBtn.addEventListener('click', clickOnStop);

function clickOnStart() {
  startBtn.setAttribute('disabled', 'disabled');
  stopBtn.removeAttribute('disabled', 'disabled');
  timerForChangeColor = setInterval(() => {
    const randomColor = `${getRandomHexColor()}`;
    document.body.style.backgroundColor = randomColor;
  }, 1000);
}
function clickOnStop() {
  this.setAttribute('disabled', 'disabled');
  clearInterval(timerForChangeColor);
  startBtn.removeAttribute('disabled', 'disabled');
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
