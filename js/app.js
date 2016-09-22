// if (!document.querySelectorAll) {;
// 	document.querySelectorAll = function (selectors) {;

// 		var style = document.createElement('style'), elements = [], element;

// 		// document.documentElement.firstChild.appendChild(style);
// 		(document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(style);

// 		document._qsa = [];

// 		style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
// 		window.scrollBy(0, 0);
// 		style.parentNode.removeChild(style);

// 		while (document._qsa.length) {
// 			element = document._qsa.shift();
// 			element.style.removeAttribute('x-qsa');
// 			elements.push(element);
// 		}
// 		document._qsa = null;
// 		return elements;
// 	};
// }

// if (!document.querySelector) {
// 	document.querySelector = function (selectors) {
// 		var elements = document.querySelectorAll(selectors);;
// 		return (elements.length) ? elements[0] : null;
// 	};
// }


$(document).ready(function(){
	$('#add-discipline1').on('click touchstart',function (e) {
		$('#add-discipline1,#grid-discipline1').addClass('activate').val("Added");
		$('input#disciplineID1').val("Design");
		e.preventDefault();
	});
});

$(document).ready(function(){
	$('#add-discipline2').on('click touchstart',function (e) {
		$('#add-discipline2,#grid-discipline2').addClass('activate').val("Added");
		$('input#disciplineID2').val("Coding");
		e.preventDefault();
	});
});

// $(document).ready(function(){
// 	$('#add-discipline3').on('click touchstart',function (e) {
// 		$('#add-discipline3,#grid-discipline3').addClass('activate').val("Added");
// 		$('input#disciplineID3').val("Illustration");
// 		e.preventDefault();
// 	});
// });

$(document).ready(function(){
	$('#add-discipline3').on('click touchstart',function (e) {
		$('#add-discipline3,#grid-discipline3').addClass('activate').val("Added");
		$('input#disciplineID3').val("Illustration");
		e.preventDefault();
	});
});



$(function(){
    $('#add-discipline3').click(function() {
       // if the play button value is 'play', call the play function
       // otherwise call the pause function
       $(this).val() == "Added" ? play_int() : play_pause();
    });
});

function play_int() {
    $('#add-discipline3').val("Add Illustration");
    // do play
}

function play_pause() {
    $('#add-discipline3').val("Added");
    // do pause
}




// $('#play').click(function() {
//    if ($(this).val() == "play") {
//       $(this).val("pause");
//       play_int();
//    }
//    else {
//       $(this).val("play");
//      play_pause();
//    }
// });




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


