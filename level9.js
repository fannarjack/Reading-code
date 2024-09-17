let numbers = [1, 2, 3, 4, 5];
let listHTML = "";

for (let i = 0; i < numbers.length; i++) {
    listHTML += "<li>Number at index " + i + " is " + numbers[i] + "</li>";
}

document.getElementById("numberList").innerHTML = listHTML;

//this is creating a list in html. it will display something like this
//<ul id="numberList">
//<li>Number at index 0 is 1</li>
//<li>Number at index 1 is 2</li>
//<li>Number at index 2 is 3</li>
//<li>Number at index 3 is 4</li>
//<li>Number at index 4 is 5</li>
//</ul>