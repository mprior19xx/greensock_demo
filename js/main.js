(() => {

	const box = document.querySelector('.box');

	function startAnimation(){
		// TweenMax.to(el, time {properties}); <= Basic Structure
	TweenMax.to(box, 0.8, {x:400, rotation:180});
	}

	function resetAnimation(){
		// TweenMax.to(el, time {properties}); <= Basic Structure
	TweenMax.to(box, 0.0, {x:0, rotation:0});
	}

	box.addEventListener("mouseover", startAnimation);

	box.addEventListener("mouseout", resetAnimation);

	


})();