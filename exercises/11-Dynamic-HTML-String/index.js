var today = new Date();
var year = today.getFullYear();
//let myString = "<p>Hello!</p> <strong>My friend</strong>, we are in the year ${new Date().getFullYear()}</p>";
//let myString = '<p>Hello!</p> <strong>My friend, </strong>we are in the year ${new Date().getFullYear()}</p>';

//myString.document.appendChild("${year}");
//document.getElementsByName("myString").innerHTML = year;

//1st way
//let myString = `<p>Hello!</p> <strong>My friend, </strong>we are in the year ${new Date().getFullYear()}</p>`;
//2nd way
let myString = "<p>Hello!</p> <strong>My friend, </strong>we are in the year "+new Date().getFullYear()+"</p>";

document.write(myString);