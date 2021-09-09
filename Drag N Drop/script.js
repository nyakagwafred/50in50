const empties = document.querySelectorAll('.empty');
const fill = document.querySelector('.fill');

function dragStart() {
	this.className += ' hold';
	setTimeout(() => {
		this.className = 'invisible';
	}, 0);
}

function dragEnd() {
	this.className = 'fill';
}
function dragOver(e) {
	e.preventDefault();
}
function dragEnter(e) {
	e.preventDefault();
	this.className = 'empty';
	this.className += ' bgColor';
}
function dragLeave(e) {
	e.preventDefault();
	this.className = 'empty';
}
function dragDrop() {
	this.className = 'empty';
	this.append(fill);
}
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('drop', dragDrop);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}
