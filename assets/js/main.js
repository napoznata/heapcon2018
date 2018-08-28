$('.checkbox-toggle').click(function(){
	$('.btn4').toggleClass('open');
});

/* Calculates the next color */
const colors = ["#384af4", "#fd4000"];
var colorNdx;
function nextColor() {
	colorNdx = Math.floor(Math.random() * colors.length);
	return colors[colorNdx];
}

function applyRandomBackgroundColor() {
    var stylesheet = document.styleSheets[1];
    stylesheet.cssRules[0].style.backgroundColor = nextColor();
}

let direction = 1;
function initNonHomePage() {
	$(window).scroll(function() {
		const height = $(window).scrollTop();

		if (direction === 1) {
			if (height > 500) {
				$("body").css("backgroundColor", "#231f20");
				direction = 2;
	    	}
	    }
	    else {
	    	console.log(height);
			if (height < 400) {
				$("body").css("backgroundColor", nextColor());
				direction = 1;
	    	}
	    }
	});
}