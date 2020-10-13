
$('#back-btn').click(function(){


	$( "#option1" ).removeClass( "clear-photo" );
	$( "#option2" ).removeClass( "clear-photo" );
	$( "#option3" ).removeClass( "clear-photo" );
	$( "#option4" ).removeClass( "clear-photo" );

	
	$('#option1').animate({width:"25vw", height:"101vh", top:"10%"}, 0);
	$('#option2').animate({width:"25vw", height:"101vh", top:"1%", left:'0%'}, 0);
	$('#option3').animate({width:"25vw", height:"101vh", top:"1%", left:'0%'}, 0);
	$('#option4').animate({width:"25vw", height:"101vh", top:"1%", left:'0%'}, 0);
	$('#side_options').animate({left:"-50vw"}, 1000);


	document.getElementById('container_products').style.background = "#ffffff";

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


	$( "#sophim" ).removeClass( "color" );
	$( "#sophim" ).addClass( "grey" );
	$( "#aloe-vera" ).removeClass( "color" );
	$( "#aloe-vera" ).addClass( "grey" );


	
	$('#sophim').animate({width:"50vw", height:"100vh"}, 0);
	$('#aloe-vera').animate({width:"50vw", height:"100vh"}, 0);

	$('#side_options_as').animate({left:"-30vw"}, 1000);



	
	document.getElementById('aloe-vera').style.display = 'block';
	document.getElementById('sophim').style.display = 'block';
	document.getElementById('plus-btn').style.display = 'block';
	document.getElementById('plus-btn2').style.display = 'block';



	
})


$('#option1').click(function(){

	if($(window).width() < 1000)
	{
	   // change functionality for smaller screens
		
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
	document.getElementById("back-btn").style.backgroundImage = "url('IMG/4x/flecha1@4x.png')";

	document.getElementById('side_options').style.background = "#959C7F";
	document.getElementById('container_products').style.background = "#959C7F";
	document.getElementById("side_title").innerHTML = "DE LA OLIVA |";
	document.getElementById("side_option1").innerHTML = "Phytosqualan ®";
	document.getElementById("side_option2").innerHTML = "Insapolive";
	document.getElementById("side_option3").innerHTML = "Biophytosebum ®";
	document.getElementById("side_option4").innerHTML = "Phytowax ®";
	document.getElementById("side_option5").innerHTML = "";

//MOBILE
	document.getElementById("back-btn").style.top = "15px";
	document.getElementById("back-btn").style.width = "40px";
	document.getElementById("back-btn").style.height = "40px";
	document.getElementById("side_title").style.top = "20px";
	document.getElementById("side_title").style.left = "60px";
	document.getElementById("logo_side").style.width = "40px";

	document.getElementById("side_list").style.top = "40px";
	document.getElementById("side_title").style.fontSize = "22pt";
	
	document.getElementById('side_option1').style.paddingRight= '10px';
	document.getElementById('side_option2').style.paddingRight= '10px';

	document.getElementById('side_option3').style.paddingRight= '10px';

	document.getElementById('side_option4').style.paddingRight= '10px';
	
	if($(window).width() < 800)
	{
	$('#side_options').animate({position:"relative",left:"50vw", top: "515vh", marginLeft:"-190px", marginTop:"-150px",height:"380px", width:"380px"}, 600);
	} else {
		$('#side_options').animate({position:"relative",left:"50vw", top: "500vh", marginLeft:"-190px", marginTop:"-150px",height:"380px", width:"380px"}, 600);

	}
	// /mobile
	document.getElementById("side_option5").innerHTML = "";
	document.getElementById("side_option1").style.visibility = 'visible';
	document.getElementById("side_option2").style.visibility = 'visible';
	document.getElementById("side_option3").style.visibility = 'visible';
	document.getElementById("side_option4").style.visibility = 'visible';
	document.getElementById("side_option5").style.visibility = 'hidden';
	


	} else {
	   
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
	document.getElementById("back-btn").style.backgroundImage = "url('IMG/4x/flecha1@4x.png')";

	document.getElementById('side_options').style.background = "#959C7F";
	document.getElementById('container_products').style.background = "#959C7F";
	document.getElementById("side_title").innerHTML = "DE LA OLIVA |";
	document.getElementById("side_option1").innerHTML = "Phytosqualan ®";
	document.getElementById("side_option2").innerHTML = "Insapolive";
	document.getElementById("side_option3").innerHTML = "Biophytosebum ®";
	document.getElementById("side_option4").innerHTML = "Phytowax ®";
	document.getElementById("side_option5").innerHTML = "";

	$('#side_options').animate({position:"relative", top:'448.7vh',height:"100vh", width:"30vw"}, 0);
	$('#side_options').animate({left:"0"}, 600);

	
	document.getElementById("side_option5").innerHTML = "";
	document.getElementById("side_option1").style.visibility = 'visible';
	document.getElementById("side_option2").style.visibility = 'visible';
	document.getElementById("side_option3").style.visibility = 'visible';
	document.getElementById("side_option4").style.visibility = 'visible';
	document.getElementById("side_option5").style.visibility = 'hidden';
	}

})


$('#option2').click(function(){
	if($(window).width() > 1000)
{
   // change functionality for smaller screens
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

	$('#option2').animate({width:"80vw", height:"100vh", left:"30vw"}, 600);

	$('#side_options').animate({left:"0"}, 600);

	document.getElementById("back-btn").style.backgroundImage = "url('IMG/boto_enrera_groc.png')";
	$( "#option2" ).addClass( "clear-photo" );
	document.getElementById('side_options').style.background = "#BCAE72";
	document.getElementById('container_products').style.background = "#BCAE72";
	document.getElementById("side_title").innerHTML = "TEXTURIZADOS |";
	document.getElementById("side_option1").innerHTML = "Phytowax ®";
	document.getElementById("side_option2").innerHTML = "Vegeline";
	document.getElementById("side_option3").innerHTML = "MC30-MC300";
	document.getElementById("side_option4").innerHTML = "";
	document.getElementById("side_option5").innerHTML = "";

	document.getElementById("side_option1").style.visibility = 'visible';
	document.getElementById("side_option2").style.visibility = 'visible';
	document.getElementById("side_option3").style.visibility = 'visible';
	document.getElementById("side_option4").style.visibility = 'hidden';
	document.getElementById("side_option5").style.visibility = 'hidden';
} else {
   // change functionality for larger screens
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

	$('#option2').animate({width:"100vw", height:"100vh", left:"0vw"}, 600);

	//MOBILE
	document.getElementById("back-btn").style.top = "15px";
	document.getElementById("back-btn").style.width = "40px";
	document.getElementById("back-btn").style.height = "40px";
	document.getElementById("side_title").style.top = "20px";
	document.getElementById("side_title").style.left = "60px";
	document.getElementById("logo_side").style.width = "40px";

	document.getElementById("side_list").style.top = "40px";
	document.getElementById("side_title").style.fontSize = "22pt";
	
	document.getElementById('side_option1').style.paddingRight= '10px';
	document.getElementById('side_option2').style.paddingRight= '10px';

	document.getElementById('side_option3').style.paddingRight= '10px';

	document.getElementById('side_option4').style.paddingRight= '10px';

	if($(window).width() < 800)
	{
	$('#side_options').animate({position:"relative",left:"50vw", top: "515vh", marginLeft:"-190px", marginTop:"-150px",height:"380px", width:"380px"}, 600);
	} else {
		$('#side_options').animate({position:"relative",left:"50vw", top: "500vh", marginLeft:"-190px", marginTop:"-150px",height:"380px", width:"380px"}, 600);

	}
	// /mobile

	document.getElementById("back-btn").style.backgroundImage = "url('IMG/boto_enrera_groc.png')";
	$( "#option2" ).addClass( "clear-photo" );
	document.getElementById('side_options').style.background = "#BCAE72";
	document.getElementById('container_products').style.background = "#BCAE72";
	document.getElementById("side_title").innerHTML = "TEXTURIZADOS |";
	document.getElementById("side_option1").innerHTML = "Phytowax ®";
	document.getElementById("side_option2").innerHTML = "Vegeline";
	document.getElementById("side_option3").innerHTML = "MC30-MC300";
	document.getElementById("side_option4").innerHTML = "";
	document.getElementById("side_option5").innerHTML = "";

	document.getElementById("side_option1").style.visibility = 'visible';
	document.getElementById("side_option2").style.visibility = 'visible';
	document.getElementById("side_option3").style.visibility = 'visible';
	document.getElementById("side_option4").style.visibility = 'hidden';
	document.getElementById("side_option5").style.visibility = 'hidden';
}
	
	
	

})


$('#option3').click(function(){

	if($(window).width() < 1000)
{
   // change functionality for smaller screens
   $('#side_option1').attr('href', "aceites.html");
	$('#side_option2').attr('href', "mantecas.html");


	

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

//mobile

	document.getElementById("back-btn").style.top = "15px";
	document.getElementById("back-btn").style.width = "40px";
	document.getElementById("back-btn").style.height = "40px";
	document.getElementById("side_title").style.top = "20px";
	document.getElementById("side_title").style.left = "60px";
	document.getElementById("logo_side").style.width = "40px";

	document.getElementById("side_list").style.top = "40px";
	document.getElementById("side_title").style.fontSize = "22pt";
	
	document.getElementById('side_option1').style.paddingRight= '10px';
	document.getElementById('side_option2').style.paddingRight= '10px';

	document.getElementById('side_option3').style.paddingRight= '10px';

	document.getElementById('side_option4').style.paddingRight= '10px';

	if($(window).width() < 800)
	{
	$('#side_options').animate({position:"relative",left:"50vw", top: "515vh", marginLeft:"-190px", marginTop:"-150px",height:"380px", width:"380px"}, 600);
	} else {
		$('#side_options').animate({position:"relative",left:"50vw", top: "500vh", marginLeft:"-190px", marginTop:"-150px",height:"380px", width:"380px"}, 600);

	}
	// /mobile

	$( "#option3" ).addClass( "clear-photo" );
	document.getElementById("back-btn").style.backgroundImage = "url('IMG/boto_enrera_blau.png')";
	document.getElementById('side_options').style.background = "#8F9FA9";
	document.getElementById('container_products').style.background = "#8F9FA9";
	document.getElementById("side_title").innerHTML = "ACEITES Y MANTECAS |";
	document.getElementById("side_option1").innerHTML = "Aceites";
	document.getElementById("side_option2").innerHTML = "Mantecas";
	document.getElementById("side_option3").innerHTML = "";
	document.getElementById("side_option4").innerHTML = "";
	document.getElementById("side_option5").innerHTML = "";

} else {
   // change functionality for larger screens
   $('#side_option1').attr('href', "aceites.html");
	$('#side_option2').attr('href', "mantecas.html");


	$('#option3').animate({width:"60vw", height:"100vh", left:'20vw'}, 600);

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
	document.getElementById("back-btn").style.backgroundImage = "url('IMG/boto_enrera_blau.png')";
	document.getElementById('side_options').style.background = "#8F9FA9";
	document.getElementById('container_products').style.background = "#8F9FA9";
	document.getElementById("side_title").innerHTML = "ACEITES Y MANTECAS |";
	document.getElementById("side_option1").innerHTML = "Aceites";
	document.getElementById("side_option2").innerHTML = "Mantecas";
	document.getElementById("side_option3").innerHTML = "";
	document.getElementById("side_option4").innerHTML = "";
	document.getElementById("side_option5").innerHTML = "";

}
	

})



$('#option4').click(function(){

	if($(window).width() < 1000)
{
   // change functionality for smaller screens
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

	$('#option4').animate({width:"100vw", height:"100vh", left:'0%'}, 600);

	//mobile
	document.getElementById("back-btn").style.top = "15px";
	document.getElementById("back-btn").style.width = "40px";
	document.getElementById("back-btn").style.height = "40px";
	document.getElementById("side_title").style.top = "20px";
	document.getElementById("side_title").style.left = "60px";
	document.getElementById("logo_side").style.width = "40px";

	document.getElementById("side_list").style.top = "40px";
	document.getElementById("side_title").style.fontSize = "22pt";
	
	document.getElementById('side_option1').style.paddingRight= '10px';
	document.getElementById('side_option2').style.paddingRight= '10px';

	document.getElementById('side_option3').style.paddingRight= '10px';

	document.getElementById('side_option4').style.paddingRight= '10px';

	if($(window).width() < 800)
	{
	$('#side_options').animate({position:"relative",left:"50vw", top: "515vh", marginLeft:"-190px", marginTop:"-150px",height:"380px", width:"380px"}, 600);
	} else {
		$('#side_options').animate({position:"relative",left:"50vw", top: "500vh", marginLeft:"-190px", marginTop:"-150px",height:"380px", width:"380px"}, 600);

	}
	// /mobile


	$( "#option4" ).addClass( "clear-photo" );

	document.getElementById('side_options').style.background = "#808080";
	document.getElementById('container_products').style.background = "#808080";
	document.getElementById("back-btn").style.backgroundImage = "url('IMG/boto_enrera_blau.png')";
	document.getElementById("side_title").innerHTML = "EMOLIENTES |";
	document.getElementById("side_option1").innerHTML = "Phytosqualan ®";
	document.getElementById("side_option2").innerHTML = "Insapolive";
	document.getElementById("side_option3").innerHTML = "Biophytosebum ®";
	document.getElementById("side_option4").innerHTML = "Squapure";
	document.getElementById("side_option5").innerHTML = "Sophiderm";
	document.getElementById("side_option1").style.visibility = 'visible';
	document.getElementById("side_option2").style.visibility = 'visible';
	document.getElementById("side_option3").style.visibility = 'visible';
	document.getElementById("side_option4").style.visibility = 'visible';
	document.getElementById("side_option5").style.visibility = 'visible';

	

} else {
   // change functionality for larger screens
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

	$('#option4').animate({width:"70vw", height:"100vh", left:'30%'}, 600);

	$('#side_options').animate({left:"0"}, 600);


	$( "#option4" ).addClass( "clear-photo" );

	document.getElementById('side_options').style.background = "#808080";
	document.getElementById('container_products').style.background = "#808080";
	document.getElementById("back-btn").style.backgroundImage = "url('IMG/boto_enrera_blau.png')";
	document.getElementById("side_title").innerHTML = "EMOLIENTES |";
	document.getElementById("side_option1").innerHTML = "Phytosqualan ®";
	document.getElementById("side_option2").innerHTML = "Insapolive";
	document.getElementById("side_option3").innerHTML = "Biophytosebum ®";
	document.getElementById("side_option4").innerHTML = "Squapure";
	document.getElementById("side_option5").innerHTML = "Sophiderm";
	document.getElementById("side_option1").style.visibility = 'visible';
	document.getElementById("side_option2").style.visibility = 'visible';
	document.getElementById("side_option3").style.visibility = 'visible';
	document.getElementById("side_option4").style.visibility = 'visible';
	document.getElementById("side_option5").style.visibility = 'visible';

	

}
	

})











$('#plus-btn').click(function(){

	$('#side_option1_as').attr('href', "phytowax.html");
	$('#side_option2_as').attr('href', "vegeline.html");
	$('#side_option3_as').attr('href', "mc30-mc300.html");

	

	

	$('#sophim').removeClass('grey');
	$('#sophim').addClass('color');
	

	document.getElementById('aloe-vera').style.display = 'none';
	document.getElementById('sophim-text').style.display = 'none';
	document.getElementById('plus-btn').style.display = 'none';
	document.getElementById('plus-btn2').style.display = 'none';


	$('#sophim').animate({width:"100vw", height:"100vh"}, 1000);

	$('#side_options_as').animate({left:"0"}, 1000);


	$( "sophim" ).addClass( "clear-photo" );
	
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


$('#plus-btn2').click(function(){

	$('#side_option1').attr('href', "phytowax.html");
	$('#side_option2').attr('href', "vegeline.html");
	$('#side_option3').attr('href', "mc30-mc300.html");

	$('#aloe-vera').removeClass('grey');
	$('#aloe-vera').addClass('color');

	$('#sophim').off('mouseover');

	
	document.getElementById('plus-btn').style.display = 'none';
	document.getElementById('plus-btn2').style.display = 'none';
	

	$('#aloe-vera').animate({width:"100vw", height:"100vh"}, 1000);

	$('#side_options_as').animate({left:"0"}, 1000);

	document.getElementById('sophim').style.display = "none";
	document.getElementById('aloe-text').style.display = "none";
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
  