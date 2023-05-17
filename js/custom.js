

$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 300,
				'autoScrolling': false,
				'css3': true,
				'navigation': false,
				'navigationPosition': 'right',
				'fitToSection': false,
			});
			
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})


function switchTheme() {
	// let body = document.getElementById("wholeBody");
	document.querySelector('body').classList.toggle("light");
}
const toTheTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

// const colorToggler = () => 