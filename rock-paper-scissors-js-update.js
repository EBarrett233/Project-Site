let P1 = ""
let P2 = ""

// Rock is below .33 
// paper is between .33 & .66
//sciccors is above .66 
function pickRock(){
     P1 = "rock"
     let x = "You Picked "+P1
    document.getElementById("playerchoice").innerHTML = x
    pickP2()
    checkWinner() 
}
function pickPaper(){
    P1 = "paper"
     let x = "You Picked "+P1
    document.getElementById("playerchoice").innerHTML = x 
    pickP2()
    checkWinner() 
}

function pickScissors(){
    P1 = "scissors"
    let x = "You Picked "+P1
   document.getElementById("playerchoice").innerHTML = x 
   pickP2()
    checkWinner() 
}


function pickP2()
{
    let num = Math.random()
if(num<.33)
{
    P2 = "paper"
    let y = "Computer Picked "+P2
   document.getElementById("computerchoice").innerHTML = y
}

if(num>=.33 && num<.66)
{
    P2 = "rock"
    let y = "Computer Picked "+P2
   document.getElementById("computerchoice").innerHTML = y

}

if(num>=.66)
{
    P2 = "scissors"
    let y = "Computer Picked "+P2
   document.getElementById("computerchoice").innerHTML = y
}

}


function checkWinner(){
if(P1=="scissors" && P2=="rock")
{
    let z = "Computer Wins! Rock beats Scissors!"
    document.getElementById("winner").innerHTML = z
}

else if(P1=="rock" && P2=="paper")
{
    let z = "Computer Wins! Paper beats Rock!"
    document.getElementById("winner").innerHTML = z

}

else if(P1=="paper" && P2=="scissors")
{
    let z = "Computer Wins! Scissors beats Paper!"
    document.getElementById("winner").innerHTML = z

}


else if(P1==P2)
{
    let z = "Tie! Play Again!"
    document.getElementById("winner").innerHTML = z
}


else if(P2=="scissors" && P1=="rock")
{
    let z = "You Win! Rock beats Scissors!"
    document.getElementById("winner").innerHTML = z
}

else if(P2=="rock" && P1=="paper")
{
    let z = "You Win! Paper beats Rock!"
    document.getElementById("winner").innerHTML = z
}

else if(P1=="scissors" && P2=="paper")
{
    let z = "You Win! Scissors beats Paper!"
    document.getElementById("winner").innerHTML = z
}
}

