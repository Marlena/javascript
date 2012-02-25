var userName;

function greetUser(){
	userName = readCookie("irock_username");
	if (userName){
		alert("Hello " + userName + ", I missed you.");
	}
	else{
		alert("Hello, I am your pet rock.");
	}
	
}

function resizeRock(){
	document.getElementById("rockImg").style.height= (document.body.clientWindowHeight - 100) * 0.9;
}

function touchRock(){
	if (userName){
		alert("I like the attention, " + userName + ". Thank you.");
	}
	else{
		userName = prompt("What is your name?", "Enter your name here.");
		if (userName){
			alert("It is good to meet you, " + userName + ".");
			writeCookie("irock_username", userName, 5 * 365);
			}
	}		
		document.getElementById("rockImg").src = "rock_happy.png";
		setTimeout("document.getElementById('rockImg').src = 'rock.png' ", 0.5 * 60 * 1000);


}