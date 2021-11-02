let wordsMin = 6;

let text = document.querySelectorAll(".adopt")[0];

let wordCount = text.innerHTML.split(" ").length;

if (wordCount >= wordsMin) {
	text.innerHTML = text.innerHTML.replace(/ ([^ ]*)$/, "&nbsp;$1");
}


// Original script from https://alexmansfield.com/javascript/preventing-widows-orphans-with-javascript/

// var nbspSelectors = [
// 	'h1',
// 	'h2',
// 	'h3',
// 	'h4',
// 	'h5',
// 	'h6',
// 	'p',
// 	'blockquote'
// ];

// var nbspWordMin = 6;

// nbspSelectors.forEach(function(selector) {
// 	var nbspElements = document.querySelectorAll(selector);
// 	nbspElements.forEach(function(element) {
// 		var wordCount = (element.innerHTML.split(" ").length);
// 		if (wordCount >= nbspWordMin ) {
// 			element.innerHTML = element.innerHTML.replace(/ ([^ ]*)$/,'&nbsp;$1');
// 		}
// 	});
// });