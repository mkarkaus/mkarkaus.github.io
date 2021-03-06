
// var myname;
// var nameWidth;

// myname = document.getElementById('name');
// myname.style.fontSize = "8vh";
// while (window.innerWidth * 0.9 < myname.clientWidth)
// 	myname.style.fontSize = (parseFloat(myname.style.fontSize) - 0.1) + "vh";

$(document).ready(function() {

	$('h1').click(function() {
	
		$('h1').css("animation", "fadeAway 0.5s");
		$('h1').css("visibility", "hidden");
		setTimeout(function() {
			$('h1').css("animation", "moveFromTop 1s");
			$('h1').css("visibility", "visible");
			$('h1').html("That's me!");
			$('h1').css("margin", "auto auto auto auto");
		}, 500);
		setTimeout(function() {backToMiikka();}, 2000);
	});
	
	function backToMiikka()
	{
		$('h1').css("animation", "fadeAway 0.5s");
		$('h1').css("visibility", "hidden");
		setTimeout(function() {
			$('h1').css("animation", "moveFromTop2 1s");
			$('h1').css("visibility", "visible");
			$('h1').html("MIIKKA KARKAUS");
			$('h1').css("margin", "auto auto auto auto");
		}, 500);
	};

	var	projects = ["Lem_in", "Filler", "ft_printf", "Fillit", "Libft"];

	function openlist()
	{
		/* Open the list of projects */

		/* Checks if list has already been opened so that it doesn't create extra divs */
		if (!($('#' + projects[0]).length))
		{
			$('#arrow').finish().animate({
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
				$('#' + value).finish().animate({
					opacity: 1,
					top: '-10px'
				}, (index + 1) * 150);
			});
		}
	}

	function closelist()
	{
		/* Close the list of projects */
		$.each(projects, function(index, value) {
			if ($('#' + value).length)
			{
				$('#' + value).animate({
					opacity: 0,
					top: 0
				}, (index + 1) * 150);
				setTimeout(function () {
					$('#' + value).remove();
				}, 5 * 150);
			}
		});
		$('#arrow').finish().animate({
			opacity: 1,
		}, 1000);
	}


	function secondclick()
	{
		closelist();
		$('.idgithub').click((event) => {
			firstclick(event);
		});
		setTimeout(() => {
			$('#ghhome').removeAttr("href");
		}, 500);
	}

	function firstclick(event)
	{
		event.stopPropagation();
		openlist();
		$('.idgithub').off('click');
		$('body').click(() => {
			secondclick();
		});
		setTimeout(() => {
			$('#ghhome').attr('href', 'https://www.github.com/mkarkaus');
		}, 500);	
	}

	/* Checks if website is opened in touchscreen */

	if (!!('ontouchstart' in window)) {

		$('#ghhome').removeAttr("href");
		$('.idgithub').click((event) => {
			firstclick(event);
		});
	}
	else {
		$('.idgithub').mouseenter(function() {
			openlist();
		});

		$('.rm_list').mouseleave(function() {
			closelist();
		});
	}
});
