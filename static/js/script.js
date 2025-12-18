window.onload = function () {
	const labButtons = document.querySelectorAll(".lab");
	const thirdLabTabs = document.querySelectorAll(".lab3-tab");

	showLab(1);
	showThirdLabTab(1);
	changeThirdLabTabsColors();

	setupSortButton("#sort-numbers-button", "#numbers-list", "#sort-numbers-result", true);
	setupSortButton("#sort-words-button", "#words-list", "#sort-words-result");

	labButtons.forEach((button, index) => {
		button.addEventListener("click", () => {
			labButtons.forEach(btn => btn.classList.remove("active"));
			button.classList.add("active");
			showLab(index + 1);
		});
	});

	thirdLabTabs.forEach((button, index) => {
		button.addEventListener("click", () => {
			thirdLabTabs.forEach(btn => btn.classList.remove("active"));
			button.classList.add("active");
			showThirdLabTab(index + 1);
		});
	});

	document.querySelector("#change-tabs-colors").addEventListener("click", () => {
		changeThirdLabTabsColors();
	});

	const modal = document.createElement("div");
	modal.id = "image-modal";
	modal.classList.add("modal");
	modal.innerHTML = `
		<span class="close">&times;</span>
		<img class="modal-content" id="big-image">
	`;
	document.body.appendChild(modal);

	const modalImg = modal.querySelector("#big-image");
	const closeBtn = modal.querySelector(".close");

	document.querySelectorAll(".small-image").forEach(img => {
		img.addEventListener("click", () => {
			modalImg.src = img.src;
			modal.classList.add("show");
		});
	});

	closeBtn.addEventListener("click", () => {
		modal.classList.remove("show");
	});

	window.addEventListener("click", e => {
		if (e.target === modal) modal.classList.remove("show");
	});

	document.querySelector("#toggle-text-btn").addEventListener("click", () => {
		thirdLabExpandText();
	});

	document.querySelector("#counter-click").addEventListener("click", () => {
		const counter = document.querySelector("#counter");
		if (counter.textContent < 10) {
			counter.textContent = parseInt(counter.textContent, 10) + 1;
		} else {
			this.alert("Достигнуто максимальное значение");
		}
	});

	const products = [
		{ name: "кофе", price: 50 },
		{ name: "чай", price: 45 },
		{ name: "какао", price: 30 }
	];

	const productsList = document.querySelector("#products-list");
	const totalSumEl = document.querySelector("#total-sum");

	products.forEach(product => {
		const label = document.createElement("label");
		label.style.display = "block";

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.value = product.price;

		label.appendChild(checkbox);
		label.appendChild(document.createTextNode(` ${product.name} — ${product.price} ₽`));
		productsList.appendChild(label);

		checkbox.addEventListener("change", () => {
			let total = 0;
			const checkboxes = productsList.querySelectorAll("input[type='checkbox']");
			checkboxes.forEach(ch => {
				if (ch.checked) total += Number(ch.value);
			});
			totalSumEl.textContent = total;
		});
	});
};
