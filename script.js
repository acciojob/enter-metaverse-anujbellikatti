// //your JS code here. If required.

function hi(){
	const enterButton = document.getElementById("enterBtn");
	
let x = document.querySelector("#status");
	let s =  document.createElement("h1")
	s.innerHTML = "Entered Metaverse";
	s.id = "status"
	x.replaceWith(s);
	x.remove();
	enterButton.innerHTML = s.id;
	// document.body.appendChild(s);
	// document.body.removeChild(x);
}

// document.addEventListener("DOMContentLoaded", function () {
//     const statusElement =document.querySelector("#status");
//     const enterButton = document.getElementById("enterBtn");

//     enterButton.addEventListener("click", function () {
//         statusElement.innerHTML = '<hi>Entered Metaverse</hi>';
//     });
// });