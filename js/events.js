//define functions here

$(document).ready(function(){

function getIt(){
 $('p').on('click', function(){
   return alert ('Hey!')
 });
}

function frameIt(){

}

function pressIt(){
  $(document).on('keypress', function(key){
    if(key.which == 71){
    return alert ('G key was pressed')
    }
  }
}

function submitIt(){

}

});
