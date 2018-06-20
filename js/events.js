function getIt(){
 $('p').on('click', function(){
   return alert ('Hey!')
 });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
});
}

function pressIt(){
  $('#typing').on('keypress', function(key){
    if (key.which == 71) {
    alert ("You pressed 'g'!")
    }
  })
}

function submitIt(){
  $("form").on("submit", function() {
    alert('your form is going to be submitted now');
  })
}

$(document).ready(function(){


});
