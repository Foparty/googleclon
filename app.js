const body = document.body;
const configBtn = document.querySelector('.config');
const appsButton = document.querySelector('.gridbutton');
const appsMenu = document.querySelector('.apps-menu');
const rightNav = document.querySelector('.right-nav');
const sideMenuBtn = document.querySelector('.hamburguer');
const sideCloseMenuBtn = document.querySelector('.close-hamburguer');
const sideMenu = document.querySelector('.sidemenu-container');

appsButton.addEventListener('click', () => {
	appsMenu.classList.toggle('shown');
});

sideMenuBtn.addEventListener('click', () => {
	sideMenu.classList.toggle('shown');
});
sideCloseMenuBtn.addEventListener('click', () => {
	sideMenu.classList.toggle('shown');
});

sideMenu.addEventListener('click', () => {
	sideMenu.classList.toggle('shown');
});

if (
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	body.classList = 'dark';
} else {
	body.classList = 'light';
}

configBtn.addEventListener('click', () => {
	if (body.classList == 'dark') {
		body.classList = 'light';
	} else {
		body.classList = 'dark';
	}
});

const device = navigator.userAgent;

if (device.includes('iPhone' || 'iPad')) {
	rightNav.style.display = 'none';
	sideMenu.style.display = 'block';
}
// if (device.includes('iPad')) {
// 	rightNav.style.display = 'none';
// 	sideMenu.style.display = 'block';
// }
