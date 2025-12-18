function splitString(input, toInt = false) {
	return input
		.split(",")
		.map(str => str.trim())
		.map(str => (toInt ? parseInt(str, 10) : str));
}

function formatString(array) {
	return array.join(", ");
}

function setupSortButton(buttonSelector, inputSelector, outputSelector, toInt = false) {
	const button = document.querySelector(buttonSelector);
	if (!button) return;

	button.addEventListener("click", () => {
		const input = document.querySelector(inputSelector)?.value || "";
		const sorted = splitString(input, toInt).sort();
		document.querySelector(outputSelector).value = formatString(sorted);
	});
}

function showLab(labId) {
	document.querySelectorAll(".content > div").forEach(div => div.classList.remove("active"));
	document.getElementById(`content-lab-${labId}`)?.classList.add("active");
	document.querySelector(".lab-title").textContent = `Лабораторная работа №${labId}`;
}

function showThirdLabTab(tabId) {
	document.querySelectorAll(".lab3-content > div").forEach(div => div.classList.remove("active"));
	document.getElementById(`lab3-tab-${tabId}`)?.classList.add("active");
}

function changeThirdLabTabsColors() {
	changeThirdLabTabsColors.reversed = !changeThirdLabTabsColors.reversed;

	document.querySelectorAll(".lab3-content > div").forEach((_, index) => {
		const tab = document.getElementById(`lab3-tab-${index + 1}`);
		if (!tab) return;

		tab.classList.remove("background-color-1", "background-color-2");

		const reversed = changeThirdLabTabsColors.reversed;
		const colorClass = reversed
			? `background-color-${2 - (index % 2)}`
			: `background-color-${(index % 2) + 1}`;
		tab.classList.add(colorClass);
	});
}

function thirdLabExpandText() {
	const toggleButton = document.querySelector("#toggle-text-btn");
	const textBlock = document.querySelector(".long-text");

	if (!toggleButton || !textBlock) return;

	thirdLabExpandText.expanded = !thirdLabExpandText.expanded;
	const expanded = thirdLabExpandText.expanded;

	textBlock.style.maxHeight = expanded ? "none" : "100px";
	toggleButton.textContent = expanded ? "Скрыть" : "Показать больше";
}
