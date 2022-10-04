$(document).ready(function(){

    $("#mod").click(function(){
      $('body').toggleClass('dark');

     var item = $(document).find('.dark');
  if(item.length == 0){
    $('body .firstHeader .header .rightside .moonicon a').html('<i class="fa-solid fa-moon"></i>');
   
  }
  else{
    $('.dark .firstHeader .header .rightside .moonicon a').html('<i class="fa-solid fa-sun"></i>');
  }
      
 
    });


    $('.lang a').click(function(e){

e.preventDefault();

var value = $(this).text();
var index = $(this).index();
var next = $(this).next();
var prev = $(this).prev();
if(value !== 'AZE' && index == 0){
$(this).text('AZE');
if(next.text() != 'RUS'){
next.text('RUS');
}
}



else if(value !== 'AZE' && index == 1){
$(this).text('AZE');
if(prev.text() != 'ENG'){
prev.text('ENG');
}
}


else if(value === 'AZE' && index == 0 ){
$(this).text('ENG');


}
else if(value === 'AZE' && index == 1){
$(this).text('RUS');
}


    });

  })