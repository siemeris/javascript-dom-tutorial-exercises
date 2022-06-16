// Your code here
let elem = document.createElement("p");
elem.innerHTML = "Hello World";
//Otra forma de hacerlo, con createTextNode, pero esta vez tenemos que asignarlo a un nodo
//let nodoT = document.createTextNode("Hello World");
//elem.appendChild(nodoT);
elem.style.background="yellow"
document.body.appendChild(elem);