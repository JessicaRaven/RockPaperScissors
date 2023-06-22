//generate computers hand sign
function computerSign(){
    //random number 0-2
    let n=Math.floor(Math.random()*3);
    //check array rock, paper and scissors
    let signs=["rock","paper","scissors"];
    //return computers hand
    return signs[n];
}
    

//player input
function playerSign(){
    //ask for input
    let signs=["rock","paper","scissors"];
    let playerHand= prompt("rock, paper, scissors !");
     if (playerHand===null) return null;
    //convert to lower case 
    playerHand= playerHand.toLowerCase();
    //save as player Hand if valid
    for (let i=0;i<=2;i++){
        if (playerHand===signs[i]){
            return playerHand
        }
    }
    //throw error if invalid and retry
    console.log("invalid hand");
    return playerSign(); 
}

//compare hands
function compareHands(){
    //ask for computers sign
    let computer=computerSign();
    //ask for players sign
    let player=playerSign();
    //if menu close end game
    if(player==null){
        return null;
    }
    //if player hand rock and pc hand scissors or player hand paper and pc hand rock or player hand scissors and pc hand paper
        //return +1
    else if ((player==="rock"&&computer==="scissors")||(player==="paper"&&computer==="rock")||(player==="scissors"&&computer==="paper")){
        console.log("you win this round!");
        return +1;
    }
    //if any of the combinations for pc winning
        //return -1
    else if((player==="rock"&&computer==="paper")||(player==="paper"&&computer==="scissors")||(player==="scissors"&&computer==="rock")){
        console.log("better luck next round human");
        return -1;
    }
        //if both hands equal
        //anounce draw
        //run a new hand and return result
    else {
        console.log("this round was a draw");
        return compareHands();
    }
}
function game(){
    // set score to 0
    let computerScore=0;
    let playerScore=0;
    //loop through 5 matches
    for (let i=0;i<5;i++){
        result=compareHands();
        if(result===null){
            console.log("we can play later");
            return;
        }
        //add score to right variable
        if(result>0) playerScore += result;
        else computerScore += result;

        console.log("player: "+playerScore);
        console.log("computer: "+ (1-computerScore));

        if (playerScore===3){
            console.log("congratulations you won");
            return;}
        if (computerScore===-3){
            console.log("you are defeated human");}
        //add compare hands to score
    }
    //if score positive anounce player victory if score negi anounce defeat
}