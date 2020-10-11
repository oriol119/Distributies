
function changeStateMenu(){
  if( $('#menu-checkbox').prop('checked') ) {
    closeMenu();
    $( "#menu-checkbox" ).prop( "checked", false );
  } else {
    openMenu();
    
  }
}



function openMenu(){
  setTimeout(function(){  $('#list_round').css("font-size", "2vw"); }, 550);
    document.getElementById("menu-txt").style.display = "none";

    
    $('#menu-round').animate({width:"50vw", height:"50vw", top:'4.5vh', right:'25%'}, 600);
    
   
    setTimeout(function(){  $('#close-btn').css( 'display','block'); }, 600);

    $('#list_round').css("display", "block");
    $('#list_round').css("margin", "auto");
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

    

})

$('#product-menu').mouseout(function(){

   

})
$('#li-menu-h6').mouseover(function(){
  $('#li-menu-h6').css("color",'#959C7F');
  $('#li-menu-h6').css("backgroundColor",'white');
  $('#li-menu-h6').css("padding",'2px 20px');

})
$('#li-menu-h6').mouseout(function(){

  $('#li-menu-h6').css("backgroundColor",'#959C7F');
  $('#li-menu-h6').css("color",'#444428');

})
$('#li2-menu-h6').mouseover(function(){
  $('#li2-menu-h6').css("color",'#959C7F');
  $('#li2-menu-h6').css("backgroundColor",'white');
  $('#li2-menu-h6').css("padding",'2px 20px');
  

})
$('#li2-menu-h6').mouseout(function(){

  $('#li2-menu-h6').css("backgroundColor",'#959C7F');
  $('#li2-menu-h6').css("color",'#444428');
  

})
$('#li3-menu-h6').mouseover(function(){
  $('#li3-menu-h6').css("color",'#959C7F');
  $('#li3-menu-h6').css("backgroundColor",'white');
  $('#li3-menu-h6').css("padding",'2px 20px');


})
$('#li3-menu-h6').mouseout(function(){

  $('#li3-menu-h6').css("backgroundColor",'#959C7F');
  $('#li3-menu-h6').css("color",'#444428');
 

})
$('#link-pro-menu').mouseover(function(){
  $('#link-pro-menu').css("color",'#959C7F');
  $('#link-pro-menu').css("backgroundColor",'white');
  $('#link-pro-menu').css("padding",'2px 20px');
  $('#news-menu').css("margin-top",'150px');
  $('#submenu-round').css("display",'block');

})
$('#link-pro-menu').mouseout(function(){

  $('#link-pro-menu').css("backgroundColor",'#959C7F');
  $('#link-pro-menu').css("color",'#444428');
  $('#news-menu').css("margin-top",'25px');
  $('#submenu-round').css("display",'none');

  
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
    document.getElementById('container_products_sophim').scrollIntoView({ block: 'end',  behavior: 'smooth' });
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


 $('#link-pro-menu').click(function(){
  document.getElementById('container_products').scrollIntoView({ block: 'end',  behavior: 'smooth' });
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


$('#button').click(function(){
  if ($('#company').val().length == 0 ){
    
    $('#company').css('backgroundColor', 'red');
    $('#company').css('borderColor', 'red');
    $('#company').css('opacity', '0.9');
  }
  if ($('#company_web').val().length == 0 ){
    $('#company_web').css('backgroundColor', 'red');
    $('#company_web').css('borderColor', 'red');
    $('#company_web').css('opacity', '0.9');
  }
  if ($('#name').val().length == 0 ){
    $('#name').css('backgroundColor', 'red');
    $('#name').css('borderColor', 'red');
    $('#name').css('opacity', '0.9');
  }
  if ($('#e-mail').val().length == 0 ){
    $('#e-mail').css('backgroundColor', 'red');
    $('#e-mail').css('borderColor', 'red');
    $('#e-mail').css('opacity', '0.9');
  }
  if ($('#phone_number').val().length == 0 ){
    $('#phone_number').css('backgroundColor', 'red');
    $('#phone_number').css('borderColor', 'red');
    $('#phone_number').css('opacity', '0.9');
  }
  else {

    $(location).attr('href', 'mailto:Damelis.%20Lopez<damelis.lopez@distributies.com>?subject='
                         + encodeURIComponent('DISTRIBUTIES WEB MAIL')
                         + "&body=" 
                         + encodeURIComponent("COMPANY:"+$('#company').val()+
                         "\n\nCOMPANY WEB: "+$('#company_web').val()+
                         "\n\nCITY WEB: "+$('#city').val()
                         +"\n\nADRESS: "+$('#adress').val()
                         +"\n\nPOSTAL CODE: "+$('#postal_code').val()
                         +"\n\nCOUNTRY: "+$('#country').val()
                         +"\n\nNAME: "+$('#name').val()
                         +"\n\nE-MAIL: "+$('#e-mail').val()
                         +"\n\nPHONE NUMBER: "+$('#phone_number').val()
                         +"\n\nMENSAJE:\n "+$('#message').val())
);

    return true;
  }
  alert("Falta llenar campos obligatorios");
});

function disableCookies(){
  document.getElementById('cookies_div').style.display = 'none';
}

$('#acep_cookies').click(function(){
  disableCookies();
})
$('#x_cookies').click(function(){
  disableCookies();
})