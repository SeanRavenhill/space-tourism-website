let wordsMin = 6;

let text = document.querySelectorAll(".adopt")[0];

let wordCount = text.innerHTML.split(" ").length;

if (wordCount >= wordsMin) {
	text.innerHTML = text.innerHTML.replace(/ ([^ ]*)$/, "&nbsp;$1");
}
