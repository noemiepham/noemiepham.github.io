  $(function(){
     vitricuaedu = $('#khoiedu').offset().top;
     console.log(vitricuaedu);
 $(".xuong").click(function(){
     $('body,html').animate({scrollTop:vitricuaedu})
 }) 
 }); 
  
 

 var time = new Date();
console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
