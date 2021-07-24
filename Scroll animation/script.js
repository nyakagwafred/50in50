window.addEventListener('scroll', () => {
	const triggerBottom = (window.innerHeight / 5) * 4;
	console.log(triggerBottom);
	document.querySelectorAll('.box').forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;

		if (boxTop < triggerBottom) {
			box.classList.add('show');
		} else {
			box.classList.remove('show');
		}
	});
});
