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
	document.body.insertBefore(enterButton);
	// document.body.appendChild(s);
	// document.body.removeChild(x);
}
// const btn=document.getElementById("enterBtn");
// const pa=document.getElementById("status");

// btn.addEventListener("click", function(){
// 	let h1=document.createElement("h1");
// 	h1.id="status";
// 	h1.innerText="Entered Metaverse";
// 	document.body.insertBefore(h1,pa);
// 	pa.remove();
// });