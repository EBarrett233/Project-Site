let P1 = ""
let P2 = ""
let score = 0
let counter = 1

// Rock is below .33 
// paper is between .33 & .66
//sciccors is above .66 
function pickRock(){
     if(counter==1){
         P1 = "rock"
         counter++
     }
     else if(counter==2){
         P2 = "rock"
         checkWinner()
     }
}
function pickPaper(){
    if(counter==1){
        P1 = "paper"
        counter++
    }
    else if(counter==2){
        P2 = "paper"
        checkWinner()
    }
}

function pickScissors(){
    if(counter==1){
        P1 = "scissors"
        counter++
    }
    else if(counter==2){
        P2 = "scissors"
        checkWinner()
    }
     
}





function checkWinner(){
if(P1=="scissors" && P2=="rock")
{
    let z = "Player 2 Wins! Rock beats Scissors!"
    document.getElementById("winner").innerHTML = z
}

else if(P1=="rock" && P2=="paper")
{
    let z = "Player 2 Wins! Paper beats Rock!"
    document.getElementById("winner").innerHTML = z
}

else if(P1=="paper" && P2=="scissors")
{
    let z = "Player 2 Wins! Scissors beats Paper!"
    document.getElementById("winner").innerHTML = z
}


else if(P1==P2)
{
    let z = "Tie! Play Again!"
    document.getElementById("winner").innerHTML = z
}

else if(P2=="scissors" && P1=="rock")
{
    let z = "Player 1 Wins! Rock beats Scissors!"
    document.getElementById("winner").innerHTML = z
    score++
}

else if(P2=="rock" && P1=="paper")
{
    let z = "PLayer 1 Wins! Paper beats Rock!"
    document.getElementById("winner").innerHTML = z
    score++
}

else if(P1=="scissors" && P2=="paper")
{
    let z = "Player 1 Wins! Scissors beats Paper!"
    document.getElementById("winner").innerHTML = z
    score++
}
localStorage.setItem('score',score)


}