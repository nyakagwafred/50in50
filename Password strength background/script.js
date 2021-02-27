const password = document.getElementById('password');
const background = document.getElementById('background');
const checkComplex = document.getElementById('effect');

password.addEventListener('input', (e) => {
	const input = e.target.value;
	const length = input.length;
	const blurValue = 20 - length * 2;
	background.style.filter = `blur(${blurValue}px)`;
	if (length < 4) {
		checkComplex.innerHTML = 'Weak Password';
		checkComplex.classList.add('red-600');
	} else {
		checkComplex.innerHTML = 'Strong Password';
	}
});

console.log(checkComplex);
