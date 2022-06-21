import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
	form: document.querySelector(".form")
}

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
	e.preventDefault()
	let amount = e.target.elements.amount.valueAsNumber
	let step = e.target.elements.step.valueAsNumber
	let delay = e.target.elements.delay.valueAsNumber
	function createPromise(position, delay) {
		const shouldResolve = Math.random() > 0.3;
		return new Promise((resolve, reject) => {
			setTimeout(() => {
			if (shouldResolve) {
				resolve({ position, delay });
					} else {
				reject({ position, delay });
			}
		}, delay)});
	};
	createPromise(1, delay)
  	.then(({ position, delay }) => {
			Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  	})
  	.catch(({ position, delay }) => {
			Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  	})
	for(let i=2; i<=amount; i+=1) {
		createPromise(i, delay+=step)
  	.then(({ position, delay }) => {
			Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  	})
  	.catch(({ position, delay }) => {
			Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  	})
		
	}
}





	