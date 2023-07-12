
//global score variables
let playerScore=0;
let npcScore=0;
//lets link in some ui
const message=document.querySelector(".score");
const buttons=document.querySelectorAll("button");
message.textContent=`Player score: ${playerScore}, PC score: ${npcScore}`;


for (const button of buttons){
    //button.addEventListener("click", function(e){compareHands(e.target.classList[0]);});
    button.addEventListener("click", compareHands);
}

//generate computers hand sign
function computerSign(){
    //random number 0-2
    let n=Math.floor(Math.random()*3);
    //check array rock, paper and scissors
    let signs=["rock","paper","scissors"];
    //return computers hand
    return signs[n];
}

//compare hands
function compareHands(playerSign){
    console.log(playerSign);
    //ask for computers sign
    let computer=computerSign();
    //ask for players sign
    let player=playerSign.target.classList[0];
    //if player hand rock and pc hand scissors or player hand paper and pc hand rock or player hand scissors and pc hand paper
        //return +1
    if ((player==="rock"&&computer==="scissors")||(player==="paper"&&computer==="rock")||(player==="scissors"&&computer==="paper")){
        console.log("you win this round!");
        playerScore+=1;
        message.textContent=`Player score: ${playerScore}, PC score: ${npcScore}`;

    }
    //if any of the combinations for pc winning
        //return -1
    else if((player==="rock"&&computer==="paper")||(player==="paper"&&computer==="scissors")||(player==="scissors"&&computer==="rock")){
        console.log("better luck next round human");
        npcScore+=1;
        message.textContent=`Player score: ${playerScore}, PC score: ${npcScore}`;
    }
        //if both hands equal
        //anounce draw
        //run a new hand and return result
    else {
        console.log("this round was a draw");
        message.textContent=`Player score: ${playerScore}, PC score: ${npcScore}`;
    }
}

