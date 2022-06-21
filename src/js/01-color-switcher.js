function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	btnStart: document.querySelector("[data-start]"),
	btnStop: document.querySelector("[data-stop]")
}

refs.btnStop.setAttribute('disabled', 'disabled')
let timerId = null;

refs.btnStart.addEventListener('click', onStartBtnClick)
refs.btnStop.addEventListener('click', onStopBtnClick)

function onStartBtnClick(e) {
	timerId	= setInterval(() => {
		document.body.style.backgroundColor = getRandomHexColor();
	}, 1000)
	refs.btnStart.toggleAttribute('disabled')
	refs.btnStop.toggleAttribute('disabled')
}

function onStopBtnClick(e) {
	clearInterval(timerId);
	refs.btnStart.toggleAttribute('disabled')
	refs.btnStop.toggleAttribute('disabled')
}