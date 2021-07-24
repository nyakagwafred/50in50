const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectRating = 'Satisfied';

const removeActive = () => {
	for (i = 0; i < ratings.length; i++) {
		ratings[i].classList.remove('active');
	}
};

sendBtn.addEventListener('click', (e) => {
	panel.innerHTML = `
	<i class="fas fa-heart"></i>
	<strong>Thank You!</strong>
	<br>
	<strong>Feedback: ${selectRating}</strong>
	<p> We'll use your feedback to improve our customer support </p>
	`;
});

ratingsContainer.addEventListener('click', (e) => {
	if (e.target.parentNode.classList.contains('rating')) {
		removeActive();
		e.target.parentNode.classList.add('active');
	}
	selectRating = e.target.nextElementSibling.innerHTML;
});
