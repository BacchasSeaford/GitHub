window.onload = function (){
	SetbgImg();
	setpos();
}

function SetbgImg(){
	var x = document.getElementById("puzzlearea").style.background= "url('background.jpg')";
}
var klam = [];
function setpos(){
	var klam = $("#puzzlearea div");
	$("#puzzlearea div").addClass("puzzlepiece");
	var x = 0;
	var q = 0;
for (var i = 0; i < 15; i++){
	if (i < 4 ){
		x = 0;
	}
		else if(i > 3 && i < 8){
			x = 1;
		}
			else if(i > 7 && i < 12){
						x = 2;
			}
				else	{
							x = 3;
						}
	klam[i].style.top = 100 * x + "px";
	klam[i].style.left = 100 * q + "px";
	q++;
	if (q == 4){
		q = 0;
	}
	
}}
	
