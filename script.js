let heading = document.getElementById("song");
let executeButton = document.getElementById("executeButton");
let outputParagraph = document.getElementById("outputText"); /* NOTE: There was nothing with the ID outputText */
let inputElement = document.getElementById("userInput");

let songs = ["Attention", "Hype Boy", "Cookie", "Hurt", "Ditto", "OMG", "Zero"]

executeButton.addEventListener("click", function(){
	var currentInputText = inputElement.value;
	generate(currentInputText);
	restyle();
});

function generate(incUserInput) {
	var songRecIndex = Math.floor(Math.random() * songs.length);
	console.log(incUserInput);
	var selectedRandomSongText = songs[songRecIndex];
	outputParagraph.innerText = incUserInput + ", you should listen to " + selectedRandomSongText + "!";
}

function restyle() {
	//changing color
	var randomR = Math.random() * 255;
	var randomG = Math.random() * 255;
	var randomB = Math.random() * 255;
	var outputColorString = "rgb(" + randomR + "," + randomG + "," + randomB + ")";

	//changing fonts
	var fonts = ["Binggrae", "BinggraeBold", "Bebas", "DM", "Roboto", "NewYork", "Squareo"];
	var outputFontString = fonts[Math.floor(Math.random() * fonts.length)];

	//chaning size
	var sizes = ["x-small", "small", "medium", "large", "x-large"];
	var outputSizeString = sizes[Math.floor(Math.random() * sizes.length)];
	console.log(outputSizeString);

	outputParagraph.style.color = outputColorString;
	outputParagraph.style.fontFamily = outputFontString;
	outputParagraph.style.fontSize = outputSizeString;
}