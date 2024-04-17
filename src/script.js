const TIMEOUT = 2_500;

const redirectCounterElement = document.querySelector('.redirect--counter');
const redirectLink = document.querySelector('.redirect--link');
const redirectWrapper = document.querySelector('.redirect-wrapper');
const spinnerWrapper = document.querySelector('.spinner-wrapper');
const videoWrapper = document.querySelector('.video-wrapper');
const shield = document.querySelector('.shield');
const video = document.querySelector('.video');

// INIT REDIRECT
const startRedirectCounter = () => {
	let items = ['in 4', 'in 3', 'in 2', 'in 1', 'now'];

	const interval = setInterval(() => {
		if (items.length === 0) {
			clearInterval(interval);
			return;
		}

		redirectCounterElement.innerHTML = items.shift();
	}, 1_000);
};

// HIDE REDIRECT
const hideRedirectWrapper = () => redirectWrapper.classList.add('hidden');

// HIDE/SHOW SPINNER
const showSpinner = () => spinnerWrapper.classList.remove('hidden');
const hideSpinner = () => spinnerWrapper.classList.add('hidden');

// SHOW SHIELD
const showShield = () => shield.classList.remove('hidden');

// DISPLAY VIDEO
const displayVideo = () => {
	videoWrapper.classList.remove('hidden');
	showShield();
	video.controls = false;
	video.volume = 1;
	video.play();
};

// MAKE VIDEO FULLSCREEN
const fullscreenVideo = () => {
	const { documentElement } = document;

	documentElement.requestFullscreen?.();
	documentElement.mozRequestFullScreen?.();
	documentElement.webkitRequestFullscreen?.();
	documentElement.msRequestFullscreen?.();
};

// DISPLAY REDIRECT SCREEN ON PAGE LOAD
window.addEventListener('load', startRedirectCounter);

// HANDLE LINK CLICK
redirectLink.addEventListener('click', event => {
	event.preventDefault();

	hideRedirectWrapper();
	showSpinner();

	setTimeout(() => {
		hideSpinner();
		displayVideo();
		fullscreenVideo();
	}, TIMEOUT);
});

// GO FULLSCREEN ON VIDEO CLICK
shield.addEventListener('click', fullscreenVideo);

// DON'T ALLOW TO LEAVE :D
window.onbeforeunload = () => '';
