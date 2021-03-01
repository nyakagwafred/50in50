const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'Bobi loves Moguka chromscuity....';
let idx = 1;

speedEl.addEventListener('input', (e) => {
	speed = 300 / e.target.value;
});

const writeText = () => {
	textEl.innerText = text.slice(0, idx);

	idx++;

	if (idx === text.length) {
		idx = 1;
	}

	setTimeout(writeText, speed);
};

writeText();
