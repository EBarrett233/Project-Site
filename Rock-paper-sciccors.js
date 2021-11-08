let P1 = .67
let P2 = Math.random()



// Rock is below .33 
// paper is between .33 & .66
//sciccors is above .66 

function pickP1()
{


if(P1<.33)
{
    P1 = "paper"
}

if(P1>=.33 && P1<.66)
{
    P1 = "Rock"
}

if(P1>=.66)
{
    P1 = "sciccors"
}

}
pickP1()

console.log(P1)

function pickP2()
{

if(P2<.33)
{
    P2 = "paper"
}

if(P2>=.33 && P2<.66)
{
    P2 = "Rock"
}

if(P2>=.66)
{
    P2 = "sciccors"
}

}
pickP2()
console.log(P2)


if(P1=="sciccors" && P2=="Rock")
{
    console.log("P2 Wins rock beats sciccors")
}

if(P1=="paper" && P2=="Rock")
{
    console.log("P1 Wins paper beats rock")
}

if(P1=="paper" && P2=="sciccors")
{
    console.log("P2  Wins sciccors beats paper")
}


if(P1==P2)
{
    console.log("Tie go again")
}


if(P2=="sciccors" && P1=="Rock")
{
    console.log("P1 Wins rock beats sciccors")
}

if(P2=="Rock" && P1=="paper")
{
    console.log("P2 Wins rock beats sciccors")
}

if(P1=="sciccors" && P2=="paper")
{
    console.log("P1 Wins sciccors beats paper")
}
