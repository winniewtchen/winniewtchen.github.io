 //this variable actually needs to be on the very top
 //debug tip: have you tried to write a string without ""?
 var numSqr = 6
 var colors = generateColors(numSqr)

 var colorbox = document.querySelectorAll(".square");
 var colorPicked = pickColor();
 var colorDisplay = document.getElementById("colorDisplay");
 var result = document.getElementById("result");
 var h1 = document.querySelector("h1");
 var button = document.querySelector("button");
 var easyBtn = document.querySelector("#easyBtn");
 var hardBtn = document.querySelector("#hardBtn");


 for(var i=0; i<colorbox.length; i++){
 	colorbox[i].style.backgroundColor = colors[i];
 	//give notification about right or wrong
 	colorbox[i].addEventListener("click",function(){
 		var clickedColor = this.style.backgroundColor;
	if (clickedColor === colorPicked){
		changeAllColor(clickedColor);
		button.textContent = "Play Again?"; //only happens when the winner square is clicked.
		h1.style.backgroundColor = clickedColor; 
		result.textContent = "Correct";
	}else{
		//fade out the wrong blocks
		this.style.backgroundColor = "white"; 
		//show try again or correct on the page
		result.textContent = "Try Again";
	}
});
 }
 //the reset button===================================
 //reset the generatecolor command
 button.addEventListener("click",function(){
 	 //reset all the colors
 	colors = generateColors(numSqr);
 	//pick a new color
 	colorPicked = pickColor();
 	//change the pickcolor to a different color
 	colorDisplay.textContent=colorPicked;
 	//reset the background for h1
 	h1.style.backgroundColor = "pink";
 	result.textContent = "";
 	//update all six colors
 	for (var i = 0; i<colorbox.length; i++){
 		colorbox[i].style.backgroundColor = colors[i];
 	}
 	//remove the top color
 	button.textContent = "New Colors";//***************not sure what I'm adding here is ok, is there a better way to reset this?*******************
 });
 //need to make sure that the new color button is generating only 3 colors

//display the textcontent on the top h1
colorDisplay.textContent = colorPicked;

//change the background color Onclick for Easy and Hard mode
easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	//change the generator to 3, and get rid of the last three
	numSqr = 3;
	colors =  generateColors(numSqr);
	colorPicked = pickColor();
	colorDisplay.textContent=colorPicked;
	for (var i = 0; i<colorbox.length; i++){
		if(colors[i]){
			colorbox[i].style.backgroundColor = colors[i];
		}
		else { //hide the bottom 3
		colorbox[i].style.display="none";
		}
		
	}

})



hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSqr = 6;
	colors =  generateColors(numSqr);
	colorPicked = pickColor();
	colorDisplay.textContent=colorPicked;
	for (var i = 0; i<colorbox.length; i++){
		colorbox[i].style.backgroundColor = colors[i];
		colorbox[i].style.display="block";
		}
		

})

//change all the colors of the squares to the colors of the one that got picked
function changeAllColor (color){
	for(var i = 0; i<colorbox.length; i++){
		colorbox[i].style.backgroundColor = colorPicked;
	}
}
//fade out the wrong blocks


// to randomized the color selection for colorPicked. using math.random()
function pickColor() {
	//pick a random number
	var random = Math.floor(Math.random()*colors.length);//math.random function has the capital "M"
	return colors[random];
}

//generate 6 random colors everytime!
function generateColors(num) {
	//create an empty array
	var arr = [];
	//create the number of random colors
	for(var i = 0; i<num; i++){
		arr.push(createColors());//inside bracket you need to run the function add "()"
	}
	
	//return an array
	return arr;
}

function createColors() {
	//random value of r
	var r = Math.floor(Math.random()*256);
	//random value of g
	var g = Math.floor(Math.random()*256);
	//random value of b
	var b = Math.floor(Math.random()*256);

	return "rgb("+ r + ", "+g+", "+b+ ")";
}

