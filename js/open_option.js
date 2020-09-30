
$('#back-btn').click(function(){


	$( "#option1" ).removeClass( "clear-photo" );
	$( "#option2" ).removeClass( "clear-photo" );
	$( "#option3" ).removeClass( "clear-photo" );
	$( "#option4" ).removeClass( "clear-photo" );

	
	$('#option1').animate({width:"33.3vw", height:"100vh"}, 1000);
	$('#option2').animate({width:"33.3vw", height:"100vh"}, 1000);
	$('#option3').animate({width:"33.3vw", height:"100vh"}, 1000);
	$('#option4').animate({width:"33.3vw", height:"100vh"}, 1000);
	$('#side_options').animate({left:"-30vw"}, 1000);
setTimeout(function(){ 


	document.getElementById('option1').style.display = 'inline-block';
	document.getElementById('option2').style.display = 'inline-block';
	document.getElementById('option3').style.display = 'inline-block';
	document.getElementById('option4').style.display = 'inline-block';




	}, 1000);

	
})

$('#option1').click(function(){

	document.getElementById('option2').style.display = 'none';
	document.getElementById('option3').style.display = 'none';
	document.getElementById('option4').style.display = 'none';

	document.getElementById('emulsifiers').style.display = 'none';
	document.getElementById('textured').style.display = 'none';
	document.getElementById('fixers').style.display = 'none';
	document.getElementById('oliva').style.display = 'none';
	

	$('#option1').animate({width:"100vw", height:"100vh"}, 1000);

	$( "#option1" ).addClass( "clear-photo" );

	document.getElementById('container_products').style.background = "#BCAE72";

	$('#side_options').animate({left:"0"}, 1000);

	

})


$('#option2').click(function(){
	document.getElementById('option1').style.display = 'none';
	document.getElementById('option3').style.display = 'none';
	document.getElementById('option4').style.display = 'none';

	document.getElementById('emulsifiers').style.display = 'none';
	document.getElementById('textured').style.display = 'none';
	document.getElementById('fixers').style.display = 'none';
	document.getElementById('oliva').style.display = 'none';

	$('#option2').animate({width:"100vw", height:"100vh"}, 1000);

	$('#side_options').animate({left:"0"}, 1000);


	$( "#option2" ).addClass( "clear-photo" );
	document.getElementById('side_options').style.background = "#959C7F";
	document.getElementById('container_products').style.background = "#959C7F";
	document.getElementById("side_title").innerHTML = "HEEEEEEE";
	document.getElementById("side_option1").innerHTML = "HEEEEEEE";
	document.getElementById("side_option2").innerHTML = "HEEEEEEE";

})


$('#option3').click(function(){
	document.getElementById('option1').style.display = 'none';
	document.getElementById('option2').style.display = 'none';
	document.getElementById('option4').style.display = 'none';

	document.getElementById('emulsifiers').style.display = 'none';
	document.getElementById('textured').style.display = 'none';
	document.getElementById('fixers').style.display = 'none';
	document.getElementById('oliva').style.display = 'none';

	$('#option3').animate({width:"100vw", height:"100vh"}, 1000);

	$('#side_options').animate({left:"0"}, 1000);


	$( "#option3" ).addClass( "clear-photo" );

	document.getElementById('side_options').style.background = "#8F9FA9";
	document.getElementById('container_products').style.background = "#8F9FA9";
	document.getElementById("side_title").innerHTML = "AHHHHHHH";
	document.getElementById("side_option1").innerHTML = "AAAAAAH";
	document.getElementById("side_option2").innerHTML = "AAAAAAAAAAH";

})



$('#option4').click(function(){
	document.getElementById('option1').style.display = 'none';
	document.getElementById('option2').style.display = 'none';
	document.getElementById('option3').style.display = 'none';

	document.getElementById('emulsifiers').style.display = 'none';
	document.getElementById('textured').style.display = 'none';
	document.getElementById('fixers').style.display = 'none';
	document.getElementById('oliva').style.display = 'none';

	$('#option4').animate({width:"100vw", height:"100vh"}, 1000);

	$('#side_options').animate({left:"0"}, 1000);


	$( "#option4" ).addClass( "clear-photo" );

	document.getElementById('side_options').style.background = "#8F9FA9";
	document.getElementById('container_products').style.background = "#8F9FA9";
	document.getElementById("side_title").innerHTML = "AHHHHHHH";
	document.getElementById("side_option1").innerHTML = "AAAAAAH";
	document.getElementById("side_option2").innerHTML = "AAAAAAAAAAH";

})