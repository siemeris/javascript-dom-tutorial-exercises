let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
//var dropdownMenu = document.getElementById("#mySelect")
//document.body.appendChild(countries);

let dropdownMenu = document.querySelector("#mySelect");
	
countries.map(name=>{
    dropdownMenu.innerHTML += `<option>${name}</option>`; 
});

dropdownMenu.addEventListener("change", (event)=>{
    alert(event.target.value);
});