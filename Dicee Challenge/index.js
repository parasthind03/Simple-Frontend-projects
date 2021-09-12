var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomImage1 = "dice"+randomNumber1 + ".png";
var imageSource1 = "images/"+randomImage1;
document.querySelector(".img1").setAttribute("src",imageSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var imageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src",imageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=("🚩Player 1 Wins");
}

else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = ("🚩Player 2 Wins");
}

else{
    document.querySelector("h1").innerHTML=("DRAW");
}