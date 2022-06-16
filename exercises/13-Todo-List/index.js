// Your code here

// const uList = document.querySelector('ul');
// const addElement = document.getElementById('addToDo');

// function makeSureThisFunctionWorksToMakeTheExerciseCompile() {
//     let trashElements = document.querySelectorAll('span');
//     for (let i = 0; i < trashElements.length; i++) {
//         trashElements[i].addEventListener('click', () => {
//             trashElements[i].parentElement.remove();
//         })
//     }

// }

// addElement.addEventListener('keyup', (event) => {
//     if (event.keyCode == 13 && event.target.value != "") {

//         let newLi = document.createElement('li');
//         newLi.innerHTML = `<span><i class='fa fa-trash'></i></span>${event.target.value}`;
//         uList.appendChild(newLi);
//         makeSureThisFunctionWorksToMakeTheExerciseCompile();

//     }
// });





// Your code here
var myUl = document.querySelector("ul");
var myToDo = document.querySelector("#addToDo");

myToDo.addEventListener("change", function() {
	var myLi = document.createElement("li");
	myLi.innerHTML = '<span><i class="fa fa-trash"></i></span>' + " " + myToDo.value;
	myUl.appendChild(myLi);
	addClickListener();
});

function addClickListener() {
	var allTasks = document.querySelectorAll(".fa-trash");
	for (let i = 0; i < allTasks.length; i++) {
		allTasks[i].addEventListener("click", function() {
			myUl.removeChild(this.closest("li"));
		});
	}
}
addClickListener();





