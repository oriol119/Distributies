
/*
$(window).scroll(function() {

   

    if($(window).scrollTop() >= 50){
        $("#who-div").addClass('transition');
        $("#who-div").removeClass('transition2');

    } else {
        $("#who-div").removeClass('transition');
        $("#who-div").addClass('transition2');
    }
    

  });
  */

$('#menu-round').click(function(){
    setTimeout(function(){  $('#list_round').css("font-size", "40px"); }, 300);
    document.getElementById("menu-txt").style.display = "none";

    
    $('#menu-round').animate({width:"50vw", height:"50vw", top:'4.5vh', right:'25%'}, 1000);
    
   
    setTimeout(function(){  $('#close-btn').css( 'display','block'); }, 800);

    $('#list_round').css("display", "block");

    
    
    
})

$('#product-menu').mouseover(function(){

    $('#news-menu').css("margin-top",'100px');

})

$('#product-menu').mouseout(function(){

    $('#news-menu').css("margin-top",'25px');

})


$('#close-btn').click(function(){
    
    $('#menu-round').animate({width:"60px", height:"60px", top:'25px', right:'50px'}, 1000);
    $('#close-btn').css( 'display','none');
    $('#list_round').css("font-size", "0px");
    $('#list_round').css("display", "none");
    document.getElementById("menu-txt").style.display = "block";
})

$('#circle_arrow').click(function(){
   
    scroll1();

})

$('#circle_arrow2').click(function(){
   
    scroll2();

})





function scroll1() {
    document.getElementById('container_products').scrollIntoView({ block: 'end',  behavior: 'smooth' });
 }


function scroll2() {
    document.getElementById('news-options').scrollIntoView({ block: 'end',  behavior: 'smooth' });
 }

