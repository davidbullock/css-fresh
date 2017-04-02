// JS Tabs
function jsTabs() {
	$('.js-tab-button').click(function(){
		$('.js-tab').hide();
		$('.js-' + $(this).val()).show();
	});
}

// Toggle Active Class
function toggleJsTabs() {
	$('.js-tab-button').on('click touchstart',function (e) {
		$('.js-tab-button').removeClass('active');
		$(this).toggleClass('active');
		e.preventDefault();
	});
}


// Accordion 
function accordionCss() {
	$('.c-accordion .js-btn').click(function() {
		$(this).toggleClass('js-active');
	});
}

// No JS - If no js, show all hidden content
var noJs = function() {
	$(".js-tab").removeClass("no-js");
};

// function revealJavascriptOnlyItems() {
// 	var hideNoJsItems = document.querySelectorAll('.hide-no-js');
// 	for (var i = hideNoJsItems.length - 1; i >= 0; i--) {
// 		hideNoJsItems[i].style.visibility = "visible";
// 		removeClassFromElement(hideNoJsItems[i], "hide-no-js");
// 	};
// }

// Document Ready
$(document).ready(function() {
	accordionCss();
	// revealJavascriptOnlyItems();
	jsTabs();
	toggleJsTabs();
	noJs();
});