$('#back-btn_sophim').click(function(){


	$( "#option1_sophim" ).removeClass( "clear-photo_sophim" );
	$( "#option2_sophim" ).removeClass( "clear-photo_sophim" );

	
	$('#option1_sophim').animate({width:"50vw", height:"100vh"}, 0);
	$('#option2_sophim').animate({width:"50vw", height:"100vh"}, 0);
	$('#side_options_sophim').animate({left:"-30vw"}, 1000);

    $('#option1_sophim').removeClass('color');
	$('#option1_sophim').addClass('grey');
	
	
    
    $('#option2_sophim').removeClass('color');
	$('#option2_sophim').addClass('grey');
	
	
    


	document.getElementById('option1_sophim').style.display = 'inline-block';
    document.getElementById('option2_sophim').style.display = 'inline-block';
    
    document.getElementById('sophim-text').style.display = 'block';
    document.getElementById('aloe-text').style.display = 'block';


$('#option3_sophim').addClass('option3_photo_sophim');
})



$('#plus-btn_sophim').click(function(){

	$('#side_option1_sophim').attr('href', "phytosqualan_ol.html");
	$('#side_option2_sophim').attr('href', "insapolive_ol.html");
	$('#side_option3_sophim').attr('href', "biophytosebum_ol.html");
	$('#side_option4_sophim').attr('href', 'phytowax_ol.html');
	

    document.getElementById('option2_sophim').style.display = 'none';
	document.getElementById('sophim-text').style.display = 'none';
	


	$('#option1_sophim').removeClass('grey');
	$('#option1_sophim').addClass('color');
	
	

	$('#option1_sophim').animate({width:"100vw", height:"100vh"}, 600);

	$( "#option1_sophim" ).addClass( "clear-photo_sophim" );
	document.getElementById("back-btn_sophim").style.backgroundImage = "url('IMG/4x/flecha1@4x.png')";

	document.getElementById('side_options_sophim').style.background = "#8F9FA9";
	document.getElementById('container_products_sophim').style.background = "#8F9FA9";
	document.getElementById("side_title_sophim").innerHTML = "SOPHIM |";
	document.getElementById("side_option1_sophim").innerHTML = "Phytosqualan";
	document.getElementById("side_option2_sophim").innerHTML = "Insapolive";
	document.getElementById("side_option3_sophim").innerHTML = "Biophytosebum";
	document.getElementById("side_option4_sophim").innerHTML = "Phytowax";
	document.getElementById("side_option5_sophim").innerHTML = "";

	$('#side_options_sophim').animate({left:"0"}, 600);

	
	document.getElementById("side_option5_sophim").innerHTML = "";
	document.getElementById("side_option1_sophim").style.visibility = 'visible';
	document.getElementById("side_option2_sophim").style.visibility = 'visible';
	document.getElementById("side_option3_sophim").style.visibility = 'visible';
	document.getElementById("side_option4_sophim").style.visibility = 'visible';
	document.getElementById("side_option5_sophim").style.visibility = 'hidden';
})


$('#plus-btn2_sophim').click(function(){

	$('#side_option1_sophim').attr('href', "phytowax_vis.html");
	$('#side_option2_sophim').attr('href', "vegeline.html");
	$('#side_option3_sophim').attr('href', "mc30-mc300.html");



	$('#option2_sophim').removeClass('grey');
	$('#option2_sophim').addClass('color');
    
    
    document.getElementById('option1_sophim').style.display = 'none';
    document.getElementById('aloe-text').style.display = 'none';
	

	$('#option2_sophim').animate({width:"100vw", height:"100vh"}, 600);

	$('#side_options_sophim').animate({left:"0"}, 600);

	document.getElementById("back-btn_sophim").style.backgroundImage = "url('IMG/boto_enrera_groc.png')";
	$( "#option2_sophim" ).addClass( "clear-photo_sophim" );
	document.getElementById('side_options_sophim').style.background = "#BCAE72";
	document.getElementById('container_products_sophim').style.background = "#BCAE72";
	document.getElementById("side_title_sophim").innerHTML = "ALOE VERA |";
	document.getElementById("side_option1_sophim").innerHTML = "Phytowax";
	document.getElementById("side_option2_sophim").innerHTML = "Vegeline";
	document.getElementById("side_option3_sophim").innerHTML = "MC30-MC300";
	document.getElementById("side_option4_sophim").innerHTML = "";
	document.getElementById("side_option5_sophim").innerHTML = "";

	document.getElementById("side_option1_sophim").style.visibility = 'visible';
	document.getElementById("side_option2_sophim").style.visibility = 'visible';
	document.getElementById("side_option3_sophim").style.visibility = 'visible';
	document.getElementById("side_option4_sophim").style.visibility = 'hidden';
	document.getElementById("side_option5_sophim").style.visibility = 'hidden';
	
	

})

$('#side_option1_sophim').mouseover(function(){

	$('#side_text1_sophim').css('display', 'block');
  
  })
  
  $('#side_option1_sophim').mouseout(function(){
  
	$('#side_text1_sophim').css('display', 'none');
  
  })
  
  $('#side_option2_sophim').mouseover(function(){
  
	$('#side_text2_sophim').css('display', 'block');
  
  })
  
  $('#side_option2_sophim').mouseout(function(){
  
	$('#side_text2_sophim').css('display', 'none');
  
  })
  
  $('#side_option3_sophim').mouseover(function(){
  
	$('#side_text3_sophim').css('display', 'block');
  
  })
  
  $('#side_option3_sophim').mouseout(function(){
  
	$('#side_text3_sophim').css('display', 'none');
  
  })
  
  $('#side_option4_sophim').mouseover(function(){
  
	$('#side_text4_sophim').css('display', 'block');
  
  })
  
  $('#side_option4_sophim').mouseout(function(){
  
	$('#side_text4_sophim').css('display', 'none');
  
  })
  
  $('#side_option5_sophim').mouseover(function(){
  
	$('#side_text5_sophim').css('display', 'block');
  
  })
  
  $('#side_option5_sophim').mouseout(function(){
  
	$('#side_text5_sophim').css('display', 'none');
  
  })
  
  $('#option1_sophim').mouseover(function(){
   
      element = document.getElementById('option1_sophim');
      if (element.classList.contains('grey')){
        $('#plus-btn_sophim').css("display",'block');
      }
    
   

})

$('#option1_sophim').mouseout(function(){

    if( $(this).toggleClass('color')){
        $('#plus-btn_sophim').css("display",'none');
      }
      
    

})

$('#option2_sophim').mouseover(function(){

    element = document.getElementById('option2_sophim');
    if (element.classList.contains('grey')){
        $('#plus-btn2_sophim').css("display",'block');
    }
    
  

})

$('#option2_sophim').mouseout(function(){
    if( $(this).toggleClass('color')){
        $('#plus-btn2_sophim').css("display",'none');
      }
   
   

})
