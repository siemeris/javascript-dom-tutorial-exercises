let list = document.querySelector("#parentLi");
let childs = list.childNodes;
list.parentNode.removeChild(childs[1]);
//Otra forma:
//childs.parentNode.remove[1];