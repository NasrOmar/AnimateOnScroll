// JavaScript Document


const fadeLeft = document.querySelectorAll(".hidden-fade-left");

function activeFadeLeft() {
	fadeLeft.forEach(hiddenFadeLeft => {
		var positionFromTop = hiddenFadeLeft.getBoundingClientRect().top;
		if ((positionFromTop * 1.2) - window.innerHeight <= 0) {
			hiddenFadeLeft.classList.add("active-fade-left");
		} else if (positionFromTop - window.innerHeight >= 0) {
			hiddenFadeLeft.classList.remove("active-fade-left");
		}
	});
}


window.addEventListener("scroll", activeFadeLeft);