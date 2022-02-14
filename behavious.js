 $(function(){
     vitricuaedu = $('#khoiedu').offset().top;
     console.log(vitricuaedu);
 $(".xuong").click(function(){
     $('body,html').animate({scrollTop:vitricuaedu})
 }) 
 }); 
 
 