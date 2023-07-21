const seeBtn = document.getElementById("seeBtn");

let para = document.querySelectorAll(".para");

for(let x = 0; x < para.length; x++){
    seeBtn.addEventListener("click", () => {
        para[x].classList.toggle("see-para");

        if(seeBtn.textContent === "Hidden"){
            seeBtn.textContent = "Showed";
            seeBtn.style.backgroundColor = "greenyellow";
        }else{
            seeBtn.textContent = "Hidden";
            seeBtn.style.backgroundColor = "red";
        }
    });
};