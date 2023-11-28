(() => {
	const refs = {
		openModal4Btn: document.querySelector("[data-modal4-open]"),
		closeModal4Btn: document.querySelector("[data-modal4-close]"),
		modal4: document.querySelector("[data-modal4]"),
	};

		refs.openModal4Btn.addEventListener("click", toggleModal4);
		refs.closeModal4Btn.addEventListener("click", toggleModal4);

	function toggleModal4() {
		refs.modal4.classList.toggle("is-hidden");

	const isModal4Open = !refs.modal4.classList.contains("is-hidden");

	if (isModal4Open) {
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleKeyDown);
		} else {
		document.body.style.overflow = "";
		window.removeEventListener("keydown", handleKeyDown);
		}
	}

	function handleKeyDown(event) {
		if (event.key === "Escape") {
		toggleModal4();
		}
	}

	refs.modal4.addEventListener("keydown", function(event) {
		if (event.key === "ArrowUp" || event.key === "ArrowDown") {
		event.preventDefault();
		if (event.key === "ArrowUp") {
		  refs.modal4.scrollTop -= 50; // Прокручиваем вверх на 50 пикселей
		} else {
		  refs.modal4.scrollTop += 50; // Прокручиваем вниз на 50 пикселей
		}
		}
	});
	})();
