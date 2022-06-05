// Getting initial state of our sub menu
window.onload = (event) => {
	// getting sub navigation css styling properties
	const dropDownMenu = document.getElementById('sub-navigation');

	// getting navigation slide css styling properties
	const menuSlide = document.getElementById('menu-slide')

	dropDownMenu.style.display = 'none';
	menuSlide.style.display = 'none';


	console.log('Hi there');
};

// Menu open
var menuOpen = document.getElementById('open-menu');

menuOpen.onclick = function()
{
	var menuSlide = document.getElementById('menu-slide');

	if(menuSlide.style.display == 'none')
	{
		menuSlide.style.display = 'block';
	}
}


// Menu close
var menuClose = document.getElementById('close-menu');

menuClose.onclick = function()
{
	var menuSlide = document.getElementById('menu-slide');

	if(menuSlide.style.display == 'block')
	{
		menuSlide.style.display = 'none';
	}
}


// Performing show hide dropdown menu effect
var trigger = document.getElementById('sub-menu-trigger')

trigger.onclick = function()
{
	var dropDownMenu = document.getElementById('sub-navigation');

	if(dropDownMenu.style.display !== 'none')
	{
		dropDownMenu.style.display = 'none';
	}
	else
	{
		dropDownMenu.style.display = 'block';
	}
}

