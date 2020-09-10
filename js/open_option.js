function emulsionantesOpen(){


}




$('#option1').click(function(){
	document.getElementById('option2').style.display = 'none';
	document.getElementById('option3').style.display = 'none';

	document.getElementById('emulsifiers').style.display = 'none';
	document.getElementById('textured').style.display = 'none';
	document.getElementById('fixers').style.display = 'none';

	$('#option1').animate({width:"100vw", height:"100vh"}, 1000);
})


$('#option2').click(function(){
	document.getElementById('option1').style.display = 'none';
	document.getElementById('option3').style.display = 'none';

	document.getElementById('emulsifiers').style.display = 'none';
	document.getElementById('textured').style.display = 'none';
	document.getElementById('fixers').style.display = 'none';

	$('#option2').animate({width:"100vw", height:"100vh"}, 1000);
})


$('#option3').click(function(){
	document.getElementById('option1').style.display = 'none';
	document.getElementById('option2').style.display = 'none';

	document.getElementById('emulsifiers').style.display = 'none';
	document.getElementById('textured').style.display = 'none';
	document.getElementById('fixers').style.display = 'none';

	$('#option3').animate({width:"100vw", height:"100vh"}, 1000);
})