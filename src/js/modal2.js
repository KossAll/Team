(() => {
	const refs = {
		openModal2Btn: document.querySelector("[data-modal2-open]"),
		closeModal2Btn: document.querySelector("[data-modal2-close]"),
		modal2: document.querySelector("[data-modal2]"),
	};

		refs.openModal2Btn.addEventListener("click", toggleModal2);
		refs.closeModal2Btn.addEventListener("click", toggleModal2);

	function toggleModal2() {
		refs.modal2.classList.toggle("is-hidden");

	const isModal2Open = !refs.modal2.classList.contains("is-hidden");

	if (isModal2Open) {
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleKeyDown);
		} else {
		document.body.style.overflow = "";
		window.removeEventListener("keydown", handleKeyDown);
		}
	}

	function handleKeyDown(event) {
		if (event.key === "Escape") {
		toggleModal2();
		}
	}

	refs.modal2.addEventListener("keydown", function(event) {
		if (event.key === "ArrowUp" || event.key === "ArrowDown") {
		event.preventDefault();
		if (event.key === "ArrowUp") {
		  refs.modal2.scrollTop -= 50; // Прокручиваем вверх на 50 пикселей
		} else {
		  refs.modal2.scrollTop += 50; // Прокручиваем вниз на 50 пикселей
		}
		}
	});
	})();
