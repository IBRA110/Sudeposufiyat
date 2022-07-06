window.onload = () => {
	
	let burger = document.querySelector('.burger i')
	let menu = document.querySelector('.list')
	let listOfLinks = document.querySelectorAll('.link')
	let listOfA = document.querySelectorAll('.a-link')
	const buttons = document.querySelectorAll("[data-carousel-button]")
	var clientWidth = document.querySelector('.wrapper').offsetWidth;
	
	console.log(clientWidth)

	burger.addEventListener('click', () => {
		if (menu.style.transform === 'scaleY(1)'){
			menu.style.transform = 'scaleY(0)';
		}else{
			menu.style.transform = 'scaleY(1)';
		}
	});
	

	listOfLinks.forEach(link => {
		if (link.childNodes.length > 1){
			link.childNodes[3].addEventListener('click', () => {
				link.childNodes[5].classList.toggle('show');
			});
		}
	});


	listOfA.forEach(a => {
		a.addEventListener('click', () => {
			if (clientWidth < 986){
				menu.style.transform = 'scaleY(0)';
			}
		});
	});

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			const offset = button.dataset.carouselButton === 'next' ? 1 : -1
			const slides = button.closest("[data-carousel]").querySelector('[data-slides]')

			const activeSlide = slides.querySelector("[data-active]")
			let newIndex = [...slides.children].indexOf(activeSlide) + offset
			if (newIndex < 0){
				newIndex = slides.children.length - 1
			}
			if (newIndex >= slides.children.length){
				newIndex = 0
			}

			slides.children[newIndex].dataset.active = true
			delete activeSlide.dataset.active
		})
	})
};
