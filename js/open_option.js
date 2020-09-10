function emulsionantesOpen(){


}


$('#back-btn').click(function(){


	$( "#option1" ).removeClass( "clear-photo" );
	$( "#option2" ).removeClass( "clear-photo" );
	$( "#option3" ).removeClass( "clear-photo" );

	
	$('#option1').animate({width:"33.3vw", height:"100vh"}, 1000);
	$('#option2').animate({width:"33.3vw", height:"100vh"}, 1000);
	$('#option3').animate({width:"33.3vw", height:"100vh"}, 1000);
	$('#side_options').animate({left:"-30vw"}, 1000);
setTimeout(function(){ 


	document.getElementById('option1').style.display = 'inline-block';
	document.getElementById('option2').style.display = 'inline-block';
	document.getElementById('option3').style.display = 'inline-block';




	}, 1000);

	
})

$('#option1').click(function(){

	document.getElementById('option2').style.display = 'none';
	document.getElementById('option3').style.display = 'none';

	document.getElementById('emulsifiers').style.display = 'none';
	document.getElementById('textured').style.display = 'none';
	document.getElementById('fixers').style.display = 'none';
	

	$('#option1').animate({width:"100vw", height:"100vh"}, 1000);

	$( "#option1" ).addClass( "clear-photo" );

	document.getElementById('container_products').style.background = "#BCAE72";

	$('#side_options').animate({left:"0"}, 1000);


})


$('#option2').click(function(){
	document.getElementById('option1').style.display = 'none';
	document.getElementById('option3').style.display = 'none';

	document.getElementById('emulsifiers').style.display = 'none';
	document.getElementById('textured').style.display = 'none';
	document.getElementById('fixers').style.display = 'none';

	$('#option2').animate({width:"100vw", height:"100vh"}, 1000);

	$('#side_options').animate({left:"0"}, 1000);


	$( "#option2" ).addClass( "clear-photo" );

	document.getElementById('container_products').style.background = "#BCAE72";
})


$('#option3').click(function(){
	document.getElementById('option1').style.display = 'none';
	document.getElementById('option2').style.display = 'none';

	document.getElementById('emulsifiers').style.display = 'none';
	document.getElementById('textured').style.display = 'none';
	document.getElementById('fixers').style.display = 'none';

	$('#option3').animate({width:"100vw", height:"100vh"}, 1000);

	$('#side_options').animate({left:"0"}, 1000);


	$( "#option3" ).addClass( "clear-photo" );

	document.getElementById('container_products').style.background = "#BCAE72";
})