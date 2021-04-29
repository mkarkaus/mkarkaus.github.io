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

$(document).ready(function() {

	$('#name').click(function() {
	
		$('#name').css("animation", "fadeAway 0.5s");
		$('#name').css("visibility", "hidden");
		setTimeout(function() {
			$('#name').css("animation", "moveFromTop 1s");
			$('#name').css("visibility", "visible");
			$('#name').html("That's me!");
			$('#name').css("margin", "-10vh auto auto auto");
		}, 500);
		setTimeout(function() {backToMiikka();}, 2000);
	});
	
	function backToMiikka()
	{
		$('#name').css("animation", "fadeAway 0.5s");
		$('#name').css("visibility", "hidden");
		setTimeout(function() {
			$('#name').css("animation", "moveFromTop2 1s");
			$('#name').css("visibility", "visible");
			$('#name').html("MIIKKA KARKAUS");
			$('#name').css("margin", "-10vh auto auto auto");
		}, 500);
	};

	var	projects = ["Lem_in", "Filler", "ft_printf", "Fillit", "Libft"];

	$('.idgithub').mouseenter(function() {
		/* Open the list of projects */

		$('#arrow').animate({
			opacity: 0,
			top: '200px'
		}, 250, () => {
			$('#arrow').css('top', '10px');
		});
		$.each(projects, function(index, value) {
			var	url = "https://github.com/mkarkaus/" + value;
			var pad = $('.idgithub').css('padding-top');

			$('<div/>')
			.css({'font-size':parseInt(pad) * 2,
					'padding-top':pad,
					'padding-bottom':pad,
					'top':-pad,
					'text':value,
					'opacity':'0'})
			.attr('class', 'github-list rm_list')
			.attr('id', value)
			.html('<a href="' + url + '">' + value + '</a>')
			.appendTo('#github');
			$('#' + value).animate({
				opacity: 1,
				top: '-10px'
				// top: parseInt($('.idgithub').css('height')) + 'px'
			}, (index + 1) * 150);
		});
	});

	$('.rm_list').mouseleave(function() {
		/* Close the list of projects */
		$.each(projects, function(index, value) {
			console.log(index + ' ' + value);
			$('#' + value).animate({
				opacity: 0,
				top: 0
			}, (index + 1) * 150);
			setTimeout(function () {
				$('#' + value).remove();
			}, 5 * 150);
		});
		$('#arrow').animate({
			opacity: 1,
		}, 1000);
	});
});
