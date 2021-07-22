const messages = [
	'Message one',
	'Message two',
	'Message three',
	'Message four',
	'Message five',
	'Message six',
	'Message seven',
];

document.getElementById('button').addEventListener('click', () => {
	const notif = document.createElement('div');
	notif.classList.add('toast');
	notif.innerText = messages[Math.floor(Math.random() * messages.length)];
	document.getElementById('toasts').appendChild(notif);

	setTimeout(() => {
		notif.remove();
	}, 2000);
});
