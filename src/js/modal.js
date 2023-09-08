(() => {
	const refs = {
	  openModalBtn: document.querySelector("[data-modal-open]"),
	  closeModalBtn: document.querySelector("[data-modal-close]"),
	  modal: document.querySelector("[data-modal]"),
	};
  
	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);
  
	function toggleModal() {
	  refs.modal.classList.toggle("is-hidden");
  
	  const isModalOpen = !refs.modal.classList.contains("is-hidden");
  
	  if (isModalOpen) {
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleKeyDown);
	  } else {
		document.body.style.overflow = "";
		window.removeEventListener("keydown", handleKeyDown);
	  }
	}
  
	function handleKeyDown(event) {
	  if (event.key === "Escape") {
		toggleModal();
	  }
	}
  
	refs.modal.addEventListener("keydown", function(event) {
	  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
		event.preventDefault();
		if (event.key === "ArrowUp") {
		  refs.modal.scrollTop -= 50; // Прокручиваем вверх на 50 пикселей
		} else {
		  refs.modal.scrollTop += 50; // Прокручиваем вниз на 50 пикселей
		}
	  }
	});
  })();
  