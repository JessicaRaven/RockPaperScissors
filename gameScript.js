
//global score variables
let playerScore=0;
let npcScore=0;
//lets link in some ui
const message=document.querySelector(".score");
const buttons=document.querySelectorAll("button");
const taunt=document.querySelector(".taunt");
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
    //reset scores if game is over
    if(playerScore>=3||npcScore>=3){
        playerScore=0;
        npcScore=0;
    }
    console.log(playerSign);
    //ask for computers sign
    let computer=computerSign();
    //ask for players sign
    let player=playerSign.target.classList[0];
    //if player hand rock and pc hand scissors or player hand paper and pc hand rock or player hand scissors and pc hand paper
        //return +1
    if ((player==="rock"&&computer==="scissors")||(player==="paper"&&computer==="rock")||(player==="scissors"&&computer==="paper")){
        playerScore+=1;
        message.textContent=`Player score: ${playerScore}, PC score: ${npcScore}`;

        if(playerScore<3){
            taunt.textContent="you win this round!";
        }
        else if(playerScore>=3){
            taunt.textContent="You've won the game human"
        }
    }
    //if any of the combinations for pc winning
        //return -1
    else if((player==="rock"&&computer==="paper")||(player==="paper"&&computer==="scissors")||(player==="scissors"&&computer==="rock")){
        
        npcScore+=1;
        message.textContent=`Player score: ${playerScore}, PC score: ${npcScore}`;

        if(npcScore<3){
            taunt.textContent="Better luck next round human.";
        }
        else if(npcScore>=3){
            taunt.textContent="I've won the game. Try again if you dare.";
        }
    }
        //if both hands equal
        //anounce draw
        //run a new hand and return result
    else {
        taunt.textContent="this round was a draw";
        message.textContent=`Player score: ${playerScore}, PC score: ${npcScore}`;
    }
}

