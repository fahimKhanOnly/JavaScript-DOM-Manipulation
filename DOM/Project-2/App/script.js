const ques = document.getElementsByClassName("content-container");
const ans = document.getElementsByClassName("answer");
const quesTitle = document.getElementsByClassName("question");




for(let x = 0; x < ques.length; x++){
    
    let icon = document.createElement("span");
    icon.textContent = "+";
    quesTitle[x].appendChild(icon);

    ques[x].addEventListener("click", () => {

        
        ans[x].classList.toggle("jsAnswer");
        ques[x].classList.toggle("jsQuestion");

    })

};

