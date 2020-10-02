
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

	$('#side_option1').attr('href', "phytosqualan.html");
	$('#side_option2').attr('href', "insapolive.html");
	$('#side_option3').attr('href', "biophytosebum.html");
	$('#side_option4').attr('href', 'phytowax.html');


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

	$('#side_option1').attr('href', "phytowax.html");
	$('#side_option2').attr('href', "vegeline.html");
	$('#side_option3').attr('href', "mc30-mc300.html");


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
	document.getElementById("side_title").innerHTML = "Texturizados";
	document.getElementById("side_option1").innerHTML = "Phytowax";
	document.getElementById("side_option2").innerHTML = "Vegeline";
	document.getElementById("side_option3").innerHTML = "MC30-MC300";
	document.getElementById("side_option4").innerHTML = "";
	document.getElementById("side_option5").innerHTML = "";
	
	

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
	document.getElementById("side_title").innerHTML = "ACEITES Y MANTECAS";
	document.getElementById("side_option1").innerHTML = "Aceites";
	document.getElementById("side_option2").innerHTML = "Mantecas";
	document.getElementById("side_option3").innerHTML = "";
	document.getElementById("side_option4").innerHTML = "";
	document.getElementById("side_option5").innerHTML = "";

	disableHref();
	

})



$('#option4').click(function(){

	$('#side_option1').attr('href', "phytosqualan.html");
	$('#side_option2').attr('href', "insapolive.html");
	$('#side_option3').attr('href', "biophytosebum.html");
	$('#side_option4').attr('href', 'squapure.html');
	$('#side_option5').attr('href', 'sophiderm.html');

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
	document.getElementById("side_title").innerHTML = "EMULIENTES";
	document.getElementById("side_option1").innerHTML = "Phytosqualan";
	document.getElementById("side_option2").innerHTML = "Insapolive";
	document.getElementById("side_option3").innerHTML = "Biophytosebum";
	document.getElementById("side_option4").innerHTML = "Squapure";
	document.getElementById("side_option5").innerHTML = "Sophiderm";

	


})











$('#sophim').click(function(){

	$('#side_option1').attr('href', "phytosqualan.html");
	$('#side_option2').attr('href', "insapolive.html");
	$('#side_option3').attr('href', "biophytosebum.html");
	$('#side_option4').attr('href', 'phytowax.html');


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
	document.getElementById('container_products').style.background = "#959C7F";
	document.getElementById("side_title").innerHTML = "Texturizados";
	document.getElementById("side_option1").innerHTML = "Phytowax";
	document.getElementById("side_option2").innerHTML = "Vegeline";
	document.getElementById("side_option3").innerHTML = "MC30-MC300";
	document.getElementById("side_option4").innerHTML = "";
	document.getElementById("side_option5").innerHTML = "";

	

})


$('#aloevera').click(function(){

	$('#side_option1').attr('href', "phytowax.html");
	$('#side_option2').attr('href', "vegeline.html");
	$('#side_option3').attr('href', "mc30-mc300.html");


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
	document.getElementById("side_title").innerHTML = "Texturizados";
	document.getElementById("side_option1").innerHTML = "Phytowax";
	document.getElementById("side_option2").innerHTML = "Vegeline";
	document.getElementById("side_option3").innerHTML = "MC30-MC300";
	document.getElementById("side_option4").innerHTML = "";
	document.getElementById("side_option5").innerHTML = "";
	
	

})
