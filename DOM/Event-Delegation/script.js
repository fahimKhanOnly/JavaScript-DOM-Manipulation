// Event Delegation


// It allows users to append a SINGLE event listener to a parent element that adds it to all of its AND future descendants that match a selector.


document.querySelector("#sports").addEventListener('click', (e) => {
    const target = e.target;

    console.log(target.textContent + " are clicked.");

    if(target.matches("li")){
        target.style.backgroundColor = "lightGray";
        target.style.textDecoration = "line-through";
    }
});


// Create new items in the list
const sports = document.querySelector("#sports");
const newSports = (sportName) => {
    const sportElement = document.createElement("li");
    sportElement.textContent = sportName;
    sports.appendChild(sportElement);

};
newSports("Cricket");
