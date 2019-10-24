// JavaScript Document

// Fade Animation for divs
const fadeAnimation = document.querySelectorAll(".hidden-fade-left, .hidden-fade-right, .hidden-opacity");

function activeFadeAnimation() {
	fadeAnimation.forEach(hiddenFade => {
		// top position of div 
		var positionFromTop = hiddenFade.getBoundingClientRect().top;
		// if div contains class hidden-fade-left
		if (hiddenFade.classList.contains("hidden-fade-left")) {
			// adds active-fade-left once in ~ middle of div
			if ((positionFromTop * 1.2) - window.innerHeight <= 0) { 
				hiddenFade.classList.add("active-fade-left");
				// remove active-fade-left once scrolled above top of div
			} else if (positionFromTop - window.innerHeight >= 0) { 
				hiddenFade.classList.remove("active-fade-left");
			}
		// if div contains class hidden-fade-right	
		} else if (hiddenFade.classList.contains("hidden-fade-right")) {
			// adds active-fade-right once in ~ middle of div
			if ((positionFromTop * 1.2) - window.innerHeight <= 0) { 
				hiddenFade.classList.add("active-fade-right");
				// remove active-fade-right once scrolled above top of div
			} else if (positionFromTop - window.innerHeight >= 0) { 
				hiddenFade.classList.remove("active-fade-right");
			}
		// if div contains class hidden-opacity
		} else if (hiddenFade.classList.contains("hidden-opacity")) {
			// adds active-opacity once in ~ middle of div
			if ((positionFromTop * 1.2) - window.innerHeight <= 0) { 
				hiddenFade.classList.add("active-opacity");
				// remove active-opacity once scrolled above top of div
			} else if (positionFromTop - window.innerHeight >= 0) { 
				hiddenFade.classList.remove("active-opacity");
			}
		}
		
	});
}

window.addEventListener("scroll", activeFadeAnimation);