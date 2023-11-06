//random number generator for dice number 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var dicRand =  "dice" + randomNumber1 + ".png";
var imageRand = "images/" + dicRand;
var image1 = document.querySelector(".img1");
image1.setAttribute("src", imageRand);

//random number generator for dice number 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dicRand2 =  "dice" + randomNumber2 + ".png";
var imageRand2 = "images/" + dicRand2;
var image2 = document.querySelector(".img2");
image2.setAttribute("src", imageRand2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
