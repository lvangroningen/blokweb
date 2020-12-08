// JavaScript Document

/* zwarte underline menu */
function ul(index) {
	console.log("click!" + index);

	var underlines = document.querySelectorAll(".underline");

	for (var i = 0; i < underlines.length; i++) {
		underlines[i].style.transform = "translate3d(" + index * 100 + "%,0,0)";
	}
}

/* Search bar
bron: https://codepen.io/bennettfeely/pen/MxOrLO en https://codepen.io/takaneichinose/pen/ErGwPZ */
'use strict';

var searchBox = document.querySelectorAll('.search-box input[type="text"] + span');

searchBox.forEach(elm => {
  elm.addEventListener('click', () => {
    elm.previousElementSibling.value = '';
  });
});
