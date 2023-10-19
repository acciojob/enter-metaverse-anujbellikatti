// //your JS code here. If required.

// function hi(){
// let x = document.querySelector("#status");
// 	let s =  document.createElement("h1")
// 	s.innerHTML = "Entered Metaverse";
// 	s.id = "status"
// 	x.replaceWith(s);
// 	let a = "have.descendants', 'h1"
// 	// document.body.appendChild(s);
// 	// document.body.removeChild(x);
// }

const statusParagraph = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

enterButton.addEventListener("click", function () {
    // Create a new h1 element
    const newHeading = document.createElement("h1");
    newHeading.textContent = "Entered Metaverse";
    statusParagraph.replaceWith(newHeading);
});
