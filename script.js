$(document).ready(function() {
  $(".snow").hide();
  $("#name").focus();
 
});

$('button').click(function(){
   $(".snow").show();
  $('button').hide();
  $('input').hide();
document.body.style.backgroundImage="url('img/rt.jpg')";
  document.getElementById('Greeting').innerText="Happy Birthday" + "\n" + "Stay Blessed";
  document.getElementById('notes').innerText="Wishing you a very special birthday and a wonderful year ahead! Many many happy returns of the day" + "\n" + "I feel blessed to have you";
  document.getElementById('blessed').innerText="With" + "Love\n" + "Geet";
  var Yourname= document.getElementById('name').value;
  
   document.getElementById('yourname').innerText='MY Dear '+ Yourname + ',';
  });
