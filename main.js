function main(){
 	//$('.skillset').hide();
  //$('.skillset').fadeIn(1000);
  //$('.projects').hide();
  //$('.projects-button').on('click', function(){
    //$(this).next().toggle();
    //$(this).next().slideToggle(400);
    //$(this).toggleClass('active');
    //$(this).text('Projects Viewed');
  var colorClass = '';
  
  $('.select-color').on('click', function(){
    var selectedColor = $(this).attr('class');
    
    switch(selectedColor){
      case 'select-color cyan not-selected':
        colorClass = 'cyan';
        break;
      case 'select-color yellow not-selected':
        colorClass = 'yellow';
        break;
      case 'select-color magenta not-selected':
        colorClass = 'magenta';
        break;
    }
    
    $(this).removeClass('not-selected');
    //make sure that all the other elements next to the clicked element receive the not-selected class.
    $(this).siblings().addClass('not-selected');
  });
  
  $('.box').on('click', function(){
  	$(this).toggleClass(colorClass);        
  });
  
  $('.toggle-blink').on('click', function(){
    if(colorClass){
      $('.toggle-blink').toggleClass('opacity');
      var inter1 = setInterval(function() {
      	$('.box.magenta, .box.cyan, .box.yellow').toggleClass('blink');
  		}, 350);
      $('.toggle-blink').on('click', function(){
        clearInterval(inter1);
      });
    }
  });
}



$(document).ready(main);
