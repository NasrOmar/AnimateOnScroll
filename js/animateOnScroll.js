// JavaScript Document

// Fade Left
const fadeLeft = document.querySelectorAll(".hidden-fade-left");

function activeFadeLeft() {
	fadeLeft.forEach(hiddenFadeLeft => {
		var positionFromTop = hiddenFadeLeft.getBoundingClientRect().top;
		if ((positionFromTop * 1.2) - window.innerHeight <= 0) { // adds active-fade-left once in ~ middle of div
			hiddenFadeLeft.classList.add("active-fade-left");
		} else if (positionFromTop - window.innerHeight >= 0) { // remove active-fade-left once scrolled above top of div
			hiddenFadeLeft.classList.remove("active-fade-left");
		}
	});
}

window.addEventListener("scroll", activeFadeLeft);