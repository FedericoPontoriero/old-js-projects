const rangeInput = document.getElementById("range");

rangeInput.addEventListener("input", (e) => {
	const value = +e.target.value;
	const label = e.target.nextElementSibling;

	const rangeWidth = getComputedStyle(e.target).getPropertyValue("width");
	const labelWidth = getComputedStyle(label).getPropertyValue("width");
	const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2); // - 2 To eliminate 'px'
	const numLabelWidth = labelWidth.substring(0, labelWidth.length - 2);
	const max = +e.target.max;
	const min = +e.target.min;
	const left =
		value * (numWidth / max) -
		numLabelWidth / 2 +
		scale(value, min, max, 10, -10); // This is so it doesn't overflow the range
	label.style.left = `${left}px`;

	label.innerHTML = value;
});

function scale(number, inMin, inMax, outMin, outMax) {
	// This maps a range of numbers to another
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
