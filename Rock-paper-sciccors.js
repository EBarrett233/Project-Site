let P1 = ""
let P2 = ""
let num = Math.random()
// Rock is below .33 
// paper is between .33 & .66
//sciccors is above .66 
function pickRock(){
     P1 = "rock"
     console.log("You picked "+ P1)
}
function pickPaper(){
     P1 = "paper"
     console.log("You picked "+ P1)
}
function pickScissors(){
     P1 = "scissors"
     console.log("You picked "+ P1)
}

function pickP2()
{
if(num<.33)
{
    P2 = "paper"
    console.log("Computer picks "+ P2)
}

if(num>=.33 && num<.66)
{
    P2 = "rock"
    console.log("Computer picks "+ P2)

}

if(num>=.66)
{
    P2 = "scissors"
    console.log("Computer picks "+ P2)
}

}


function checkWinner(){
if(P1=="scissors" && P2=="rock")
{
    console.log("Computer Wins! rock beats scissors")
}

else if(P1=="paper" && P2=="rock")
{
    console.log("You Win! paper beats rock")
}

else if(P1=="paper" && P2=="scissors")
{
    console.log("Computer Wins! scissors beats paper")
}


else if(P1==P2)
{
    console.log("Tie go again")
}


else if(P2=="scissors" && P1=="rock")
{
    console.log("You Win! rock beats scissors")
}

else if(P2=="rock" && P1=="paper")
{
    console.log("You Win! paper beats rock")
}

else if(P1=="scissors" && P2=="paper")
{
    console.log("P1 Wins scissors beats paper")
}
}

