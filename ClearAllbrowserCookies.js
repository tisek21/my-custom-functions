const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);