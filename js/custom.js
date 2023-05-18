
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