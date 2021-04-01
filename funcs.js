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


var myname;
var nameWidth;

myname = document.getElementById('name');
myname.style.fontSize = "8vh";
while (window.innerWidth * 0.9 < myname.clientWidth)
	myname.style.fontSize = (parseFloat(myname.style.fontSize) - 0.1) + "vh";


function thatsMe(id)
{
	var name;
	
	name = document.getElementById(id);

	name.style.animation = "fadeAway 0.5s";
	name.style.visibility = "hidden";
	setTimeout(function() {
		name.style.animation = "moveFromTop 1s";
		name.style.visibility = "visible";
		name.innerHTML = "That's me!";
		name.style.margin = "-10vh auto auto auto";
	}, 500);
	setTimeout(function() {backToMiikka(id);}, 2000);
};

function backToMiikka(id)
{
	var name;
	
	name = document.getElementById(id);
	name.style.animation = "fadeAway 0.5s";
	name.style.visibility = "hidden";
	setTimeout(function() {
		name.style.animation = "moveFromTop2 1s";
		name.style.visibility = "visible";
		name.innerHTML = "MIIKKA KARKAUS";
		name.style.margin = "-10vh auto auto auto";
	}, 500);
};
