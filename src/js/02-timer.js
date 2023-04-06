import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start2]');
const daysEL = document.querySelector('span[data-days]');
const hourEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
let dateInFuture = {};
let timerId;
const inputEL = document.getElementById('datetime-picker');
startBtn.addEventListener('click', clickOnStart);
startBtn.setAttribute('disabled', 'disabled');

function clickOnStart() {
  timerId = setInterval(() => {
    minus -= 1000;
    dateInFuture = convertMs(minus);
    daysEL.textContent = `${dateInFuture.days}`.padStart(2, '0');
    hourEl.textContent = `${dateInFuture.hours}`.padStart(2, '0');
    minutesEl.textContent = `${dateInFuture.minutes}`.padStart(2, '0');
    secondsEl.textContent = `${dateInFuture.seconds}`.padStart(2, '0');
    if (minus < 1000) {
      clearInterval(timerId);
      return;
    }
  }, 1000);
}
let minus;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    minus = selectedDates[0] - options.defaultDate;
    if (minus < 0) {
      startBtn.setAttribute('disabled', 'disabled');
      Notiflix.Notify.failure('Please choose a date in the future');
      //   window.alert('Please choose a date in the future');
      return;
    }
    startBtn.removeAttribute('disabled', 'disabled');
  },
};

flatpickr(inputEL, options);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
