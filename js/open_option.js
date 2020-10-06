
$('#back-btn').click(function(){


	$( "#option1" ).removeClass( "clear-photo" );
	$( "#option2" ).removeClass( "clear-photo" );
	$( "#option3" ).removeClass( "clear-photo" );
	$( "#option4" ).removeClass( "clear-photo" );

	
	$('#option1').animate({width:"25vw", height:"100vh"}, 0);
	$('#option2').animate({width:"25vw", height:"100vh"}, 0);
	$('#option3').animate({width:"25vw", height:"100vh"}, 0);
	$('#option4').animate({width:"25vw", height:"100vh"}, 0);
	$('#side_options').animate({left:"-30vw"}, 1000);



	document.getElementById('option1').style.display = 'inline-block';
	document.getElementById('option2').style.display = 'inline-block';
	document.getElementById('option3').style.display = 'inline-block';
	document.getElementById('option4').style.display = 'inline-block';

	document.getElementById('emulsifiers').style.display = 'block';
	document.getElementById('textured').style.display = 'block';
	document.getElementById('fixers').style.display = 'block';
	document.getElementById('oliva').style.display = 'block';

$('#option3').addClass('option3_photo');


	



	
})

$('#back-btn2').click(function(){


	$( "#sophim" ).removeClass( "clear-photo" );
	$( "#aloe-vera" ).removeClass( "clear-photo" );


	
	$('#sophim').animate({width:"50vw", height:"100vh"}, 0);
	$('#aloe-vera').animate({width:"50vw", height:"100vh"}, 0);

	$('#side_options_as').animate({left:"-30vw"}, 1000);



	
	document.getElementById('aloe-vera').style.display = 'block';
	document.getElementById('sophim-text').style.display = 'block';
	document.getElementById('plus-btn').style.display = 'block';
	document.getElementById('plus-btn2').style.display = 'block';



	
})


$('#option1').click(function(){

	$('#side_option1').attr('href', "phytosqualan_ol.html");
	$('#side_option2').attr('href', "insapolive_ol.html");
	$('#side_option3').attr('href', "biophytosebum_ol.html");
	$('#side_option4').attr('href', 'phytowax_ol.html');
	


	document.getElementById('option2').style.display = 'none';
	document.getElementById('option3').style.display = 'none';
	document.getElementById('option4').style.display = 'none';

	document.getElementById('emulsifiers').style.display = 'none';
	document.getElementById('textured').style.display = 'none';
	document.getElementById('fixers').style.display = 'none';
	document.getElementById('oliva').style.display = 'none';
	

	$('#option1').animate({width:"100vw", height:"100vh"}, 600);

	$( "#option1" ).addClass( "clear-photo" );

	document.getElementById('side_options').style.background = "#959C7F";
	document.getElementById('container_products').style.background = "#959C7F";
	document.getElementById("side_title").innerHTML = "DE LA OLIVA |";
	document.getElementById("side_option1").innerHTML = "Phytosqualan";
	document.getElementById("side_option2").innerHTML = "Insapolive";
	document.getElementById("side_option3").innerHTML = "Biophytosebum";
	document.getElementById("side_option4").innerHTML = "Phytowax";
	document.getElementById("side_option5").innerHTML = "";

	$('#side_options').animate({left:"0"}, 600);

	
	document.getElementById("side_option5").innerHTML = "";
	document.getElementById("side_option1").style.visibility = 'visible';
	document.getElementById("side_option2").style.visibility = 'visible';
	document.getElementById("side_option3").style.visibility = 'visible';
	document.getElementById("side_option4").style.visibility = 'visible';
	document.getElementById("side_option5").style.visibility = 'hidden';
})


$('#option2').click(function(){

	$('#side_option1').attr('href', "phytowax_vis.html");
	$('#side_option2').attr('href', "vegeline.html");
	$('#side_option3').attr('href', "mc30-mc300.html");


	document.getElementById('option1').style.display = 'none';
	document.getElementById('option3').style.display = 'none';
	document.getElementById('option4').style.display = 'none';

	document.getElementById('emulsifiers').style.display = 'none';
	document.getElementById('textured').style.display = 'none';
	document.getElementById('fixers').style.display = 'none';
	document.getElementById('oliva').style.display = 'none';

	$('#option2').animate({width:"100vw", height:"100vh"}, 600);

	$('#side_options').animate({left:"0"}, 600);


	$( "#option2" ).addClass( "clear-photo" );
	document.getElementById('side_options').style.background = "#959C7F";
	document.getElementById('container_products').style.background = "#959C7F";
	document.getElementById("side_title").innerHTML = "TEXTURIZADOS |";
	document.getElementById("side_option1").innerHTML = "Phytowax";
	document.getElementById("side_option2").innerHTML = "Vegeline";
	document.getElementById("side_option3").innerHTML = "MC30-MC300";
	document.getElementById("side_option4").innerHTML = "";
	document.getElementById("side_option5").innerHTML = "";

	document.getElementById("side_option1").style.visibility = 'visible';
	document.getElementById("side_option2").style.visibility = 'visible';
	document.getElementById("side_option3").style.visibility = 'visible';
	document.getElementById("side_option4").style.visibility = 'hidden';
	document.getElementById("side_option5").style.visibility = 'hidden';
	
	

})


$('#option3').click(function(){

	
	document.getElementById("option3").style.background = "#000000";


	$("#side_option1").on('click', function(){ document.getElementById("option3").style.background = "#000000"; }); 
	$("#side_option2").on('click', function(){ document.getElementById("option3").style.background = "#FFFFFF"; }); 
	$("#back-btn").on('click', function(){ 	document.getElementById('option3').setAttribute("style", "background-image: url(IMG/SOPHIM/water-life-crop.jpg);background-position: center center; background-repeat: no-repeat;background-size: cover;"); 
});
	

	document.getElementById("side_option1").style.visibility = 'visible';
	document.getElementById("side_option2").style.visibility = 'visible';
	document.getElementById("side_option3").style.visibility = 'hidden';
	document.getElementById("side_option4").style.visibility = 'hidden';
	document.getElementById("side_option5").style.visibility = 'hidden';

	document.getElementById('option1').style.display = 'none';
	document.getElementById('option2').style.display = 'none';
	document.getElementById('option4').style.display = 'none';

	document.getElementById('emulsifiers').style.display = 'none';
	document.getElementById('textured').style.display = 'none';
	document.getElementById('fixers').style.display = 'none';
	document.getElementById('oliva').style.display = 'none';

	$('#option3').animate({width:"100vw", height:"100vh"}, 600);

	$('#side_options').animate({left:"0"}, 600);


	$( "#option3" ).addClass( "clear-photo" );

	document.getElementById('side_options').style.background = "#8F9FA9";
	document.getElementById('container_products').style.background = "#8F9FA9";
	document.getElementById("side_title").innerHTML = "ACEITES Y MANTECAS |";
	document.getElementById("side_option1").innerHTML = "Aceites";
	document.getElementById("side_option2").innerHTML = "Mantecas";
	document.getElementById("side_option3").innerHTML = "";
	document.getElementById("side_option4").innerHTML = "";
	document.getElementById("side_option5").innerHTML = "";

	$('#side_option1').click(function () {return false;});
	$('#side_option2').click(function () {return false;});

	$("#option3").removeClass('option3_photo');
	

})



$('#option4').click(function(){

	$('#side_option1').attr('href', "phytosqualan_em.html");
	$('#side_option2').attr('href', "insapolive_em.html");
	$('#side_option3').attr('href', "biophytosebum_em.html");
	$('#side_option4').attr('href', 'squapure.html');
	$('#side_option5').attr('href', 'sophiderm.html');

	document.getElementById('option1').style.display = 'none';
	document.getElementById('option2').style.display = 'none';
	document.getElementById('option3').style.display = 'none';

	document.getElementById('emulsifiers').style.display = 'none';
	document.getElementById('textured').style.display = 'none';
	document.getElementById('fixers').style.display = 'none';
	document.getElementById('oliva').style.display = 'none';

	$('#option4').animate({width:"100vw", height:"100vh"}, 600);

	$('#side_options').animate({left:"0"}, 600);


	$( "#option4" ).addClass( "clear-photo" );

	document.getElementById('side_options').style.background = "#8F9FA9";
	document.getElementById('container_products').style.background = "#8F9FA9";
	document.getElementById("side_title").innerHTML = "EMOLIENTES |";
	document.getElementById("side_option1").innerHTML = "Phytosqualan";
	document.getElementById("side_option2").innerHTML = "Insapolive";
	document.getElementById("side_option3").innerHTML = "Biophytosebum";
	document.getElementById("side_option4").innerHTML = "Squapure";
	document.getElementById("side_option5").innerHTML = "Sophiderm";
	document.getElementById("side_option1").style.visibility = 'visible';
	document.getElementById("side_option2").style.visibility = 'visible';
	document.getElementById("side_option3").style.visibility = 'visible';
	document.getElementById("side_option4").style.visibility = 'visible';
	document.getElementById("side_option5").style.visibility = 'visible';

	


})











$('#plus-btn').click(function(){

	$('#side_option1_as').attr('href', "phytowax.html");
	$('#side_option2_as').attr('href', "vegeline.html");
	$('#side_option3_as').attr('href', "mc30-mc300.html");

	

	

	$('#aloe-vera').removeClass('grey');
	$('#aloe-vera').addClass('color');
	

	document.getElementById('aloe-vera').style.display = 'none';
	document.getElementById('sophim-text').style.display = 'none';
	document.getElementById('plus-btn').style.display = 'none';
	document.getElementById('plus-btn2').style.display = 'none';


	$('#sophim').animate({width:"100vw", height:"100vh"}, 1000);

	$('#side_options_as').animate({left:"0"}, 1000);


	$( "#aloe-vera" ).addClass( "clear-photo" );
	
	document.getElementById('side_options_as').style.background = "#959C7F";
	document.getElementById('news-options').style.background = "#959C7F";
	document.getElementById("side_title_as").innerHTML = "Sophim";
	document.getElementById("side_option1_as").innerHTML = "Sophim";
	document.getElementById("side_option2_as").innerHTML = "";
	document.getElementById("side_option3_as").innerHTML = "";
	document.getElementById("side_option4_as").innerHTML = "";
	document.getElementById("side_option5_as").innerHTML = "";

	document.getElementById("side_option1_as").style.visibility = 'visible';
	document.getElementById("side_option2_as").style.visibility = 'hidden';
	document.getElementById("side_option3_as").style.visibility = 'hidden';
	document.getElementById("side_option4_as").style.visibility = 'hidden';
	document.getElementById("side_option5_as").style.visibility = 'hidden';
	
	

})

/*
$('#plus-btn2').click(function(){

	$('#side_option1').attr('href', "phytowax.html");
	$('#side_option2').attr('href', "vegeline.html");
	$('#side_option3').attr('href', "mc30-mc300.html");

	$('#aloe-vera').removeClass('grey');
	$('#aloe-vera').addClass('color');

	$('#sophim').off('mouseover');

	
	document.getElementById('sophim-text').style.display = 'none';
	document.getElementById('plus-btn').style.display = 'none';
	document.getElementById('plus-btn2').style.display = 'none';
	

	$('#aloe-vera').animate({width:"100vw", height:"100vh"}, 1000);

	$('#side_options_as').animate({left:"0"}, 1000);


	$( "#aloe-vera" ).addClass( "clear-photo" );
	document.getElementById('side_options_as').style.background = "#959C7F";
	document.getElementById('news-options').style.background = "#959C7F";
	document.getElementById("side_title_as").innerHTML = "Aloe Vera";
	document.getElementById("side_option1_as").innerHTML = "Aloe Vera";
	document.getElementById("side_option2_as").innerHTML = "";
	document.getElementById("side_option3_as").innerHTML = "";
	document.getElementById("side_option4_as").innerHTML = "";
	document.getElementById("side_option5_as").innerHTML = "";
	
	document.getElementById("side_option1_as").style.visibility = 'visible';
	document.getElementById("side_option2_as").style.visibility = 'hidden';
	document.getElementById("side_option3_as").style.visibility = 'hidden';
	document.getElementById("side_option4_as").style.visibility = 'hidden';
	document.getElementById("side_option5_as").style.visibility = 'hidden';

})
*/
$('#side_option1').mouseover(function(){

	$('#side_text1').css('display', 'block');
  
  })
  
  $('#side_option1').mouseout(function(){
  
	$('#side_text1').css('display', 'none');
  
  })
  
  $('#side_option2').mouseover(function(){
  
	$('#side_text2').css('display', 'block');
  
  })
  
  $('#side_option2').mouseout(function(){
  
	$('#side_text2').css('display', 'none');
  
  })
  
  $('#side_option3').mouseover(function(){
  
	$('#side_text3').css('display', 'block');
  
  })
  
  $('#side_option3').mouseout(function(){
  
	$('#side_text3').css('display', 'none');
  
  })
  
  $('#side_option4').mouseover(function(){
  
	$('#side_text4').css('display', 'block');
  
  })
  
  $('#side_option4').mouseout(function(){
  
	$('#side_text4').css('display', 'none');
  
  })
  
  $('#side_option5').mouseover(function(){
  
	$('#side_text5').css('display', 'block');
  
  })
  
  $('#side_option5').mouseout(function(){
  
	$('#side_text5').css('display', 'none');
  
  })
  