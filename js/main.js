import { $slider } from './selectors.js';
import { handleSlider } from './functions.js';

$slider.addEventListener('input', handleSlider);
