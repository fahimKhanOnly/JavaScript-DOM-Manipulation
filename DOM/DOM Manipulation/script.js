// DOM Manipulation


// getElementById()
// const title = document.getElementById("main-heading");
// console.log(title);



// getElementByClassName()
// const listItem = document.getElementsByClassName("list-items");
// console.log(listItem);



// getElementsByTagName()
// const tags = document.getElementsByTagName("li");
// console.log(tags);



// querySelector()
// const container = document.querySelector("div");
// console.log(container);



// QuerySelectorAll()
// const container = document.querySelectorAll("div")[0];
// console.log(container);







// DOM Manipulation


// Finding Elements
const listItems = document.querySelectorAll(".list-items");
const ul = document.querySelector("ul");
const mainHeading = document.querySelector("h1");




// Creating Elements
const li = document.createElement("li");



// Adding Elements
ul.append(li);



// Modifying Text
li.textContent = "Artugul Gazi";


// Styling an Element
for(let x = 0; x < listItems.length; x++){
    listItems[x].classList.add("list-items-style");
    listItems[x].style.backgroundColor = "#8a2be2";
}

li.style.backgroundColor = "#8a2be2";
li.style.fontSize = "30px";





// Modifyig Attributes & Classes
// setAttribute("attriute", "name");
li.setAttribute("class", "list-items");

mainHeading.setAttribute("id", "main-heading");
mainHeading.setAttribute("class", "main-heading");
console.log(mainHeading);

// removeAttribute("attribute");
mainHeading.removeAttribute("class");
console.log(mainHeading);



// Remove Elements
listItems[0].remove();