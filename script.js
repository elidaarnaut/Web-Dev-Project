var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');

btnLogin.onclick = function(event)
{
  event.preventDefault();
  //so that it does not refresh constantly
  idLogin.innerHTML = '<p>We\'re happy to see you again, </p><h1>' +username.value+ '</h1>';
}

//COUNTDOWN TIMER 
// Set the date we're counting down to
var countDownDate = new Date("Dec 18, 2022 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="timerOutput"
  document.getElementById("day").innerHTML =days ;
  document.getElementById("hour").innerHTML =hours;
  document.getElementById("minute").innerHTML = minutes; 
  document.getElementById("second").innerHTML =seconds; 
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timerOutput").innerHTML = "EXPIRED";
    document.getElementById("day").innerHTML ='0';
    document.getElementById("hour").innerHTML ='0';
    document.getElementById("minute").innerHTML ='0' ; 
    document.getElementById("second").innerHTML = '0'; 
  }
}, 1000);
var player1;
var player2;
var player3;
var player4;
var player5;
var player6;
var text

var btnSubmit = document.getElementById('do-submit');
btnSubmit.onclick = function(event){
  event.preventDefault();
  text = document.getElementById("playerChange").innerHTML; 
  player1 = document.getElementById("player1").value;
  document.getElementById("proba09")=player1;

  player2 = document.getElementById("player2").value;
  player3 = document.getElementById("player3").value;
  player4 = document.getElementById("player4").value;
  player5 = document.getElementById("player5").value;
  player6 = document.getElementById("player6").value;

  document.body.innerHTML = document.body.innerHTML.replace("Player 1", player1);

  document.getElementById("playerChange").innerHTML = text.replace("Player 1", player1);
  document.getElementById("playerChange").innerHTML = text.replace("Player 2", player2);
  document.getElementById("playerChange").innerHTML = text.replace("Player 3", player3);
  document.getElementById("playerChange").innerHTML = text.replace("Player 4", player4);
  document.getElementById("playerChange").innerHTML = text.replace("Player 5", player5);
  document.getElementById("playerChange").innerHTML = text.replace("Player 6", player6);

}

//document.body.innerHTML = document.body.innerHTML.replace("lol", "Arnaut");

//var textt = document.getElementById("proooba").innerHTML; 
//document.getElementById("proooba").innerHTML = textt.replace("lol", "Arnaut");

//function trial1(){
//  document.getElementById("trialP1").innerHTML = "Hello world!";
//}

//var counter = 0;
//var players = [];
//var gen1 = true;
//var clicked = false;

//function addFunction(event){
//  event.preventDefault(); //so that it does not refresh constantly
//  var n = document.getElementById("name").value;
  //document.getElementById("proba09").innerHTML = n;
  
//  for (let i=0; clicked!=true; i++){
//    counter++;
//    players[i] = document.getElementById("name").value;
//  }
  
  
 /* while (gen1 == true){
    for (let i = 0; gen1; i++){
      counter++;
      players[i] = document.getElementById("name").value;
    }
  }*/
  
//}
//function pairs(){
//  for (let i=0; i<counter; i++){
//    for(let j=1; j<counter; j++){
//      document.getElementById("outputPairs").innerHTML = players[i] + " - " + players[j];
//    }
//  }
//}

//function buttonClicked(clicked){
//  clicked = true;
//  return clicked;
//}

//function generate(){
  //var gen = false;
  //return gen;
//  document.getElementById('generate').onclick = buttonClicked(clicked);
//  if (clicked){
//    players.pairs();
//  }
//}