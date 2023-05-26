var player_name=prompt("Enter your name");
document.getElementById("d1").innerHTML=player_name+" click on your choice.";
let you;
let yourScore= 0;
let system;
let systemScore = 0;
choices = ["ROCK", "PAPER", "SCISSOR"];
const playerselection=document.querySelector("#your_choice");
const systemselection=document.querySelector("#system_choice");
const choiceBtns=document.querySelectorAll(".b1");
choiceBtns.forEach(button => button.addEventListener("click" ,() => {
    you=button.textContent;
    document.getElementById("your_choice").src =you+".png";
    
    computerTurn();
}))
function computerTurn(){
    system=choices[Math.floor(Math.random() * 3)];
    document.getElementById("system_choice").src = system+".png";
    compare();
}
function compare(){
    if (you == system) {
        yourScore += 1;
        systemScore += 1;
    }
    else {
        if (you == "ROCK") {
            if (system == "SCISSOR") {
                yourScore += 1;
            }
            else if (system == "PAPER") {
                systemScore += 1;
            }
        }
        else if (you == "SCISSOR") {
            if (system == "PAPER") {
                yourScore += 1;
            }
            else if (system == "ROCK") {
                systemScore += 1;
            }
        }
        else if (you == "PAPER") {
            if (system == "ROCK") {
                yourScore += 1;
            }
            else if (system == "SCISSOR") {
                systemScore += 1;
            }
        }
    }

    document.getElementById("sscore").innerText = "systemScore : "+systemScore;
    document.getElementById("yscore").innerText = " yourScore : "+ yourScore;
}