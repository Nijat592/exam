
function myFunction() {
	x = document.getElementById("exampleInputEmail1").value;
	document.getElementById("addText").innerHTML = x; 
}






function myFunc() {
	y = document.getElementById("exampleInputEmail1").backgroundImage;
	document.getElementById("addPic").backgroundImage = y;
}




button1=true;

function myFunk() {
	if(button1){
	document.getElementById("addPic").style.border = "1px solid yellow";
	document.close()
  button1=false;
	}else{
	  document.getElementById("addPic").style.border = "none";
	  document.close()
	  button1=true;
	}
    
}




button2=true;

function myFunk2() {
	if(button2){
	document.getElementById("addText").style.backgroundColor = "blue";
	document.close()
  button2 = false;
	}else{
	  document.getElementById("addText").style.backgroundColor = "red";
	  document.close()
	  button2=true;
	}
    
}




button3=true;

function myFunk3() {
	if(button3){
	document.getElementById("addText").style.fontWeight = "900";
	document.close()
  button3 = false;
	}else{
	  document.getElementById("addText").style.fontWeight = "100";
	  document.close()
	  button3=true;
	}
    
}




button4=true;

function myFunk4() {
	if(button4){
		document.getElementById("addText").removeAttribute("style");
	document.getElementById("addText").style.bottom = "0";
	document.close()
  button4 = false;
	}else{
		document.getElementById("addText").removeAttribute("style");
	  document.getElementById("addText").style.top = "0";
	  document.close()
	  button4=true;
	}    
}