const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

let size = 10;
let color = 'black';
let isPressed = false;
let x;
let y;

function drawCircle(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size * 2;
	ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
	isPressed = true;

	x = e.offsetX;
	y = e.offsetY;

	console.log(isPressed, x, y);
});

canvas.addEventListener('mouseup', (e) => {
	isPressed = false;

	x = undefined;
	y = undefined;

	console.log(isPressed, x, y);
});

canvas.addEventListener('mousemove', (e) => {
	if (isPressed) {
		const x2 = e.offsetX;
		const y2 = e.offsetY;

		drawCircle(x2, y2);
		drawLine(x, y, x2, y2);

		x = x2;
		y = y2;
	}
});

// canvas.addEventListener('dblclick', (e) => {
// 	x = e.offsetX;
// 	y = e.offsetY;
// 	console.log(`You double clicked ${x} on the X-axis and ${y} on the Y-axis`);
// });

function updateSizeOnScreen() {
	sizeEl.innerText = size;
}
increaseBtn.addEventListener('click', () => {
	size += 5;

	if (size > 50) {
		size = 50;
	}

	updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
	size -= 5;

	if (size < 50) {
		size = 5;
	}

	updateSizeOnScreen();
});

colorEl.addEventListener('change', (e) => (color = e.target.value));

clearEl.addEventListener('click', () => {
	ctx.clearRect(50, 50, canvas.width, canvas.height);
});
