(() => {
	const refs = {
		openModal3Btn: document.querySelector("[data-modal3-open]"),
		closeModal3Btn: document.querySelector("[data-modal3-close]"),
		modal3: document.querySelector("[data-modal3]"),
	};

		refs.openModal3Btn.addEventListener("click", toggleModal3);
		refs.closeModal3Btn.addEventListener("click", toggleModal3);

	function toggleModal3() {
		refs.modal3.classList.toggle("is-hidden");

	const isModal3Open = !refs.modal3.classList.contains("is-hidden");

	if (isModal3Open) {
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleKeyDown);
		} else {
		document.body.style.overflow = "";
		window.removeEventListener("keydown", handleKeyDown);
		}
	}

	function handleKeyDown(event) {
		if (event.key === "Escape") {
		toggleModal3();
		}
	}

	refs.modal3.addEventListener("keydown", function(event) {
		if (event.key === "ArrowUp" || event.key === "ArrowDown") {
		event.preventDefault();
		if (event.key === "ArrowUp") {
		  refs.modal3.scrollTop -= 50; // Прокручиваем вверх на 50 пикселей
		} else {
		  refs.modal3.scrollTop += 50; // Прокручиваем вниз на 50 пикселей
		}
		}
	});
	})();
