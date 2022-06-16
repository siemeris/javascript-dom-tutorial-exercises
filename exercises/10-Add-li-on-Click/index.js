let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let elem = document.createElement("li");
	elem.innerHTML = "Forth element";
	//elem.style.background="yellow"
	document.getElementById("myList").appendChild(elem);

});
