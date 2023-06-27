const body = document.body;
const configBtn = document.querySelector('.config');
const appsButton = document.querySelector('.gridbutton');
const appsMenu = document.querySelector('.apps-menu');

appsButton.addEventListener('click', () => {
	appsMenu.classList.toggle('shown');
});

configBtn.addEventListener('click', () => {
	if (body.classList == 'dark') {
		body.classList = 'light';
	} else {
		body.classList = 'dark';
	}
});

if (
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	body.classList = 'dark';
} else {
	body.classList = 'light';
}
