function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


$('.checkbox-toggle').click(function(){
	$('.btn4').toggleClass('open');
});

const colors = ["#384af4", "#fd4000"];
var colorNdx = 0;
function nextColor() {
	colorNdx += 1;
	if (colorNdx >= colors.length) {
		colorNdx = 0;
	}
	return colors[colorNdx];
}

async function applyRandomBackgroundColor() {
    var stylesheet = document.styleSheets[1];
    while (stylesheet.cssRules[0].style === undefined) {
    	 await sleep(1);
    }
	stylesheet.cssRules[0].style.backgroundColor = nextColor();
}

let scrollDirection = 1;
function initNonHomePage() {
	if ($(window).scrollTop() > 500) {
		$("body").css("backgroundColor", "#231f20");
		scrollDirection = 2;
	}
	$(window).scroll(function() {
		const height = $(window).scrollTop();

		if (scrollDirection === 1) {
			if (height > 500) {
				$("body").css("backgroundColor", "#231f20");
				scrollDirection = 2;
	    	}
	    }
	    else {
			if (height < 400) {
				$("body").css("backgroundColor", nextColor());
				scrollDirection = 1;
	    	}
	    }
	});
}