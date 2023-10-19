//your JS code here. If required.

function hi(){
let x = document.querySelector("#status");
	let s =  document.createElement("h1")
	s.innerHTML = "Entered Metaverse";
	s.id = "status"
	x.replaceWith(s);
	
	// document.body.appendChild(s);
	// document.body.removeChild(x);
}
