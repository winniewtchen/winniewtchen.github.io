
//----------------------USE THIS FUNCTION TO CHANGE THE TEXT STYLE ----------------------
// $("li").click(function(){
// 	$(this).css("color", "gray");
// 	$(this).css("text-decoration","line-through");
// })

//-----------------WHEN USING OBJECT IN FUNCTION JS DOES NOT TAKE IN "-", SO YOU NEED TO USE CAMEL CASE-------------------
//check off specific todos by clicking
$("ul").on("click", "li", function(){
	//if gray then turn it black
	$(this).toggleClass("completed");
	//if black then turn it back to gray )
})

//=========EVENT BUBBLING=========
//WHEN YOU HAVE MULTIPLE LAYERS TO REACH A TAG, IT TAKES DIFFERENT LAYERS TO TRIGGER THE EVENT.
//WE CAN TELL THE EVENT INSIDE THE TAG TO NOT BUBBLE
//DO NOT TRIGGER ANYTHING ON PARENT ELEMENTS
// event.stopPropagation();

// 2 major issues
//1 - the span click event is firing to its parents as well
//2 - when we fadeout the list, it does not actually get removed from the backend)

$("ul").on("click","span",function(event){ //using on() here instead of click(), and set it to ul parent
	//remove the parent element
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//use on() rather than click(), because click() is usually only applying to current elements, but on apply to all future elements

//which key

$("input[type='text']").keypress(function(event){
	if(event.which == 13) {
		//grab what is in the input to variable textInp
		var textInp = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + textInp + "</li>");
	};
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(200);
})
//summary
// take append and add to a selected element
// using on() and specify the second argument to be the nested tag that is to be formed action on inside the click