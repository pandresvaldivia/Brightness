import { root, $slider } from './selectors.js';

function setCssVar(variable, value) {
	root.style.setProperty(variable, value);
}

function handleBrightness() {
	const brightness = `hsla(247, ${24 + $slider.value / 6}%, ${
		7 + parseInt($slider.value)
	}%, 1)`;
	setCssVar('--bg', `${brightness}`);
}

function handleIcon(percentage) {
	console.log(360 * percentage);
	setCssVar('--degrees', `${360 * percentage}deg`);
}

function handleSlider() {
	const brightnessValue = ($slider.value / $slider.max) * 100;
	setCssVar('--brightness', `${brightnessValue}%`);
	handleIcon(brightnessValue);
	handleBrightness();
}

export { handleSlider };
