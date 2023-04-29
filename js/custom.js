

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