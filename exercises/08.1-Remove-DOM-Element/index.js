// your code here
// if you check the HTML, you will find that the second LI has the id=secondElement
// you can use that to your advantage as a CSS selector

//getElementbyId sin almohadilla
let element = document.getElementById("secondElement");
//Otra forma, con querySelector
//let element = document.querySelector("#secondElement");
element.parentNode.removeChild(element);
