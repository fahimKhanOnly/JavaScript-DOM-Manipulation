// DOM Manipulation



// Traversing the DOM



// Parent Node Trversal
// let ul = document.querySelector("ul");

// console.log(ul.parentNode); // parentNode is recomanded
// console.log(ul.parentElement); // parentElement is not recommanded


// let html = document.documentElement;
// console.log(html.parentNode); // parentElement is recommanded
// console.log(html.parentElement); // parentElement is not recommanded





// Child Node Traversal
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = "blue";

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);


// Sibling Node Traversal

let ul = document.querySelector("ul");

let li = ul.children[1];
console.log(li);

li.previousElementSibling.style.backgroundColor = "red";

li.nextElementSibling.style.backgroundColor = "red";