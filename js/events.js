//define functions here

$(document).ready(function(){

function getIt(){
 $('p').on('click', function(){
   return alert ('Hey!')
 });
}

function frameIt(){
  $('img').on('load', function(){
  //actions you want to happen
});
}

function pressIt(){
  $(document).on('keypress', function(key){
    if(key.which == 71){
    return alert ('G key was pressed')
    }
  }
}

function submitIt(){
  $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});
}

});
