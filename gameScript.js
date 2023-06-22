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
    //ask for input
    //convert to lower case 
    //save as player Hand if valid
    //throw error if invalid

//compare hands
    //ask for computers sign
    //ask for players sign

    //if player hand rock and pc hand scissors or player hand paper and pc hand rock or player hand scissors and pc hand paper
        //return +1

    //if any of the combinations for pc winning
        //return -1

    //if both hands equal
        //anounce draw
        //run a new game and return result

//game
    // set score to 0
    //loop through 5 matches
        //run compareHands
        //add compare hands to score
    //if score positive anounce player victory if score negi anounce defeat