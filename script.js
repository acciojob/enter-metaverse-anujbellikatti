// //your JS code here. If required.


function hi(){
let x = document.querySelector("#status");
	
	const enterButton = document.getElementById("enterBtn");
	enterButton.innerHTML = x.innerHTML;
	
	let s =  document.createElement("h1")
	s.innerHTML = "Entered Metaverse";
	s.id = "status"
	x.replaceWith(s);
	x.remove();
	
	// document.body.appendChild(s);
	// document.body.removeChild(x);
}
