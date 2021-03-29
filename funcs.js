// function slideIn(id) {

// 	var button;
	
// 	button = document.getElementById(id);
// 	button.style.animation = "links 2s";
// 	button.style.visibility = "visible";
// 	button.style.left = "-webkit-calc(48% - 12.5vh)";
// 	button.style.left = "-moz-calc(48% - 12.5vh)";
// 	button.style.left = "calc(48% - 12.5vh)";
// 	button.style.opacity = "1";
// }

// function rotateBckColor() {

// 	var topblock;

// 	topblock = document.getElementById("topbox");
// 	if (topblock.style.backgroundColor == "rgb(201, 106, 71)" || !topblock.style.backgroundColor)
// 	{
// 		topblock.style.animation = "toBlue 1s";
// 		topblock.style.backgroundColor = "rgb(128, 128, 172)";
// 	}	
// 	else
// 	{
// 		topblock.style.animation = "toOrange 1s";
// 		topblock.style.backgroundColor = "rgb(201, 106, 71)";
// 	}

// }

function thatsMe(id)
{
	var name;
	
	name = document.getElementById(id);

	name.style.margin = "-5vh 0 0 -22vh";
	name.innerHTML = "That's me!";
};

function backToMiikka(id)
{
	var name;
	
	name = document.getElementById(id);

	name.style.margin = "-5vh 0 0 -35vh";
	name.innerHTML = "MIIKKA KARKAUS";
};
