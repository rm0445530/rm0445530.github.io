/*
	Author:		Ryan Miletello
	Date:		12/6/19
*/
var isFinished = false;
/*Changes the stoplight and starts the cars*/
function startRace() {
	document.getElementById('light').src = 'GreenLight.png';
	
	moveCar('greenCar');
	moveCar('blueCar');
	
	
}
/*Moves a car based on random numbers and when the car reaches the end stops and checks for a winner*/
function moveCar(car) {
  var elem = document.getElementById(car);   
  var pos = 0;
  var carWidth = 600;
  var speed = Math.floor((Math.random() * 10) + 1);
  var id = setInterval(frame, speed);
  function frame() {
    if (pos == window.innerWidth - carWidth) {
      clearInterval(id);
	  getWinner(car);
    } else {
      pos++; 
       
      elem.style.left = pos + 'px'; 
    }
  }
}
/*Determins which car finishes first and displays the winner*/
function getWinner(car){
	if(!isFinished){
		isFinished = true;
		var elemen = document.getElementById(car + 'Winner');
		elemen.style.display = 'block';
		document.getElementById("Top").innerHTML = "Winner";
	}
}
/*Reloads the page*/
function again(){
	location.reload();
}