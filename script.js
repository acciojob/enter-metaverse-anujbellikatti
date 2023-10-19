//your JS code here. If required.

function hi(){
let x = document.getElementById("status");
	let s =  document.createElement("h1")
	s.innerHTML = x.innerHTML;
	x.replaceWith(s);
	// document.body.appendChild(s);
	// document.body.removeChild(x);
}
