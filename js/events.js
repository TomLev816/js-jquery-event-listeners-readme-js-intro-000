//define functions here

$(document).ready(function(){

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
    if(key.which == 71){
    return alert ('G key was pressed')
    }
  })
}

function submitIt(){
  $("form").on("submit", function() {
    alert('your form is going to be submitted now');
  })
}

});
