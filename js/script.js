window.onload = () => {
	let burger = document.querySelector('.burger i')
	let menu = document.querySelector('.list')
	
	burger.addEventListener('click', () => {
		if ( menu.style.transform === 'scaleY(1)'){
			menu.style.transform = 'scaleY(0)';
		}else{
			menu.style.transform = 'scaleY(1)';
		}
	});	
};
