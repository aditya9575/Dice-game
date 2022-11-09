


// by adding 1 we create a list of random nos between 1 and 6//
var randomNumber1 = Math.floor(Math.random()*6)+1;


// here we are using concatenation to add this randomly//
//genrated number in a string named same as our image address//
//this here will give us dice1.png to dice6.png string//
var randomDiceImage= "dice" + randomNumber1 +".png";


//now creating the whole randomly genrated image address same as//
//the orignal address by concatenation /images//
var randomImageSource = "images/"+randomDiceImage;

//now altering the image by using query selector//
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

//genrating second random image//
randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

//the querySelectorAll will give us all the images in form of aray but because//
//we specified[1]index1 we will be targeted to 1st image and now with the help//
//of setAttribute we set the source of the 2nd image to our previously//
//randomly genrated image source with Math.random//
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


//now declaring the winner
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 WINS";
}

else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML= "🚩Player 2 WINS";
}

else{
  document.querySelector("h1").innerHTML= "Its a DRAW🙌";
}
