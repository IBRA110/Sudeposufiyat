window.onload = () => {
	
	let burger = document.querySelector('.burger i')
	let menu = document.querySelector('.list')
	let listOfLinks = document.querySelectorAll('.link')
	let listOfA = document.querySelectorAll('.a-link')

	burger.addEventListener('click', () => {
		if (menu.style.transform === 'scaleY(1)'){
			menu.style.transform = 'scaleY(0)';
		}else{
			menu.style.transform = 'scaleY(1)';
		}
	});
	

	listOfLinks.forEach(function(link){
		if (link.childNodes.length > 1){
			link.childNodes[3].addEventListener('click', () => {
				link.childNodes[5].classList.toggle('show');
			});
		}
	});


	listOfA.forEach(function(a){
		a.addEventListener('click', () => {
			menu.style.transform = 'scaleY(0)';
		});
	});
};
