
function changeStateMenu(){
  if( $('#menu-checkbox').prop('checked') ) {
    closeMenu();
    $( "#menu-checkbox" ).prop( "checked", false );
  } else {
    openMenu();
    
  }
}



function openMenu(){
  setTimeout(function(){  $('#list_round').css("font-size", "40px"); }, 550);
    document.getElementById("menu-txt").style.display = "none";

    
    $('#menu-round').animate({width:"50vw", height:"50vw", top:'4.5vh', right:'25%'}, 600);
    
   
    setTimeout(function(){  $('#close-btn').css( 'display','block'); }, 600);

    $('#list_round').css("display", "block");
}

function closeMenu(){
   
  $('#menu-round').animate({width:"100px", height:"100px", top:'25px', right:'50px'}, 600);
  $('#close-btn').css( 'display','none');
  $('#list_round').css("font-size", "0px");
  $('#list_round').css("display", "none");
  document.getElementById("menu-txt").style.display = "block";
  
}

$('#menu-round').click(function(e){
  if($(e.target).is("span") || $(e.target).attr("id") == "menu-txt") {
    openMenu();
  }

    
})

$('#close-btn').click(function(){
  closeMenu();
})

$('#product-menu').mouseover(function(){

    $('#news-menu').css("margin-top",'150px');

})

$('#product-menu').mouseout(function(){

    $('#news-menu').css("margin-top",'25px');

})

$('#sophim').mouseover(function(){
    element = document.getElementById('sophim');
    if (element.classList.contains('grey')){
      $('#plus-btn').css("display",'block');
    }
   

})

$('#sophim').mouseout(function(){

    
    $('#plus-btn').css("display",'none');

})

$('#aloe-vera').mouseover(function(){

  element = document.getElementById('sophim');
  if (element.classList.contains('grey')){
    $('#plus-btn2').css("display",'block');
  }

})

$('#aloe-vera').mouseout(function(){

   
    $('#plus-btn2').css("display",'none');

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


// MIRAR SCROLL (NO FUNCIONA) IMPORTANT
 $(window).scroll(function(event) {
    var scrollTop = $(window).scrollTop();
    console.log("Vertical "+scrollTop);

    if (scrollTop > 94) {
        $('.zoom_img').css({
            width: (100 + scroll/5) + "%"
        })
    } else if (scrollTop > 885){
        $('#go_top').fadeOut(100);
        }
  });

//FUNCIONA PERO HAARIA D'ANAR L'ALTRE
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $(".zoom_img").css({
        width: (100 + scroll/5) + "%"
    })
})


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


  /*SLIDER*/

 "use strict";

 productScroll();
 
 function productScroll() {
   let slider = document.getElementById("slider");
   let next = document.getElementsByClassName("pro-next");
   let prev = document.getElementsByClassName("pro-prev");
   let slide = document.getElementById("slide");
   let item = document.getElementById("slide");
 
   for (let i = 0; i < next.length; i++) {
     //refer elements by class name
 
     let position = 0; //slider postion
 
     prev[i].addEventListener("click", function() {
       //click previos button
       if (position > 0) {
         //avoid slide left beyond the first item
         position -= 1;
         translateX(position); //translate items
       }
     });
 
     next[i].addEventListener("click", function() {
       if (position >= 0 && position < hiddenItems()) {
         //avoid slide right beyond the last item
         position += 1;
         translateX(position); //translate items
       }
     });
   }
 
   function hiddenItems() {
     //get hidden items
     let items = getCount(item, false);
     let visibleItems = slider.offsetWidth / 210;
     return items - Math.ceil(visibleItems);
   }
 }
 
 function translateX(position) {
   //translate items
   slide.style.left = position * -210 + "px";
 }
 
 function getCount(parent, getChildrensChildren) {
   //count no of items
   let relevantChildren = 0;
   let children = parent.childNodes.length;
   for (let i = 0; i < children; i++) {
     if (parent.childNodes[i].nodeType != 3) {
       if (getChildrensChildren)
         relevantChildren += getCount(parent.childNodes[i], true);
       relevantChildren++;
     }
   }
   return relevantChildren;
 }
 
 $('#who_menu').click(function(){
  
  document.getElementById('who-div').scrollIntoView({ block: 'end',  behavior: 'smooth' });
  closeMenu();
 
 });

 

 $('#news-menu').click(function(){
  document.getElementById('news').scrollIntoView({ block: 'end',  behavior: 'smooth' });
  closeMenu();
 
 });

 

 $('#oliva_menu').click(function(e){
  document.getElementById('container_products').scrollIntoView({ block: 'end',  behavior: 'smooth' });
  document.getElementById('option1').style.display = 'inline-block';
  $( "#option1" ).click();
  closeMenu();
 });

 $('#textured_menu').click(function(){
  document.getElementById('container_products').scrollIntoView({ block: 'end',  behavior: 'smooth' });
  document.getElementById('option2').style.display = 'inline-block';
  $( "#option2" ).click();
  closeMenu();
 });

 $('#oil_menu').click(function(){
  document.getElementById('container_products').scrollIntoView({ block: 'end',  behavior: 'smooth' });
  document.getElementById('option3').style.display = 'inline-block';
  $( "#option3" ).click();
  closeMenu();
 });

 $('#emolientes').click(function(e){
  document.getElementById('container_products').scrollIntoView({ block: 'end',  behavior: 'smooth' });
  document.getElementById('option4').style.display = 'inline-block';
  $( "#option4" ).click();
  closeMenu();
 });



 
 $('#contact-menu').on('click', function() {
  document.getElementById('contact').scrollIntoView({ block: 'end',  behavior: 'smooth' });
  closeMenu();
  
});

 $('#who_menu_st').click(function(){
  document.getElementById('who-div').scrollIntoView({ block: 'end',  behavior: 'smooth' });
  
  
 });

 $('#who_products_st').click(function(){
  document.getElementById('products').scrollIntoView({ block: 'end',  behavior: 'smooth' });
  
  
  
 });

 $('#who_news_st').click(function(){
  document.getElementById('news').scrollIntoView({ block: 'end',  behavior: 'smooth' });
  
  
 });

 $('#who_contact_st').click(function(){
  document.getElementById('contact').scrollIntoView({ block: 'end',  behavior: 'smooth' });
  
  
 });
 



$('.close_all').click(function(){
  window.history.back();
 });


