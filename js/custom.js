

$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 300,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
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

const toTheTop = () => window.scrollTo({top: 0, behavior: 'smooth'});