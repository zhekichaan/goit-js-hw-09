import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
	timePicker: document.querySelector('#datetime-picker'),
	btnStart: document.querySelector('[data-start]'),
	days: document.querySelector('[data-days]'),
	hours: document.querySelector('[data-hours]'),
	minutes: document.querySelector('[data-minutes]'),
	seconds: document.querySelector('[data-seconds]')
}

refs.btnStart.setAttribute('disabled', 'disabled')

const date = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
		if(selectedDates[0].getTime() > date.getTime()) {
			refs.btnStart.removeAttribute('disabled')
		} else {
			Notify.failure("Please choose a date in the future");
		}
  },
};

let calendar = flatpickr(refs.timePicker, options)

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

function addLeadingZero(value) {
	return value.padStart(2, '0');
}

refs.btnStart.addEventListener('click', onStartBtnClick) 

function onStartBtnClick() {
	let timeChange = calendar.selectedDates[0].getTime() - date.getTime();
	const timerId = setInterval(() => {
		const time = convertMs(timeChange);
		refs.days.textContent = addLeadingZero(time.days.toString())
		refs.hours.textContent = addLeadingZero(time.hours.toString())
		refs.minutes.textContent = addLeadingZero(time.minutes.toString())
		refs.seconds.textContent = addLeadingZero(time.seconds.toString())
		timeChange -= 1000;
		if(timeChange <= 0) {
			clearInterval(timerId);
		}
	}, 1000)
}