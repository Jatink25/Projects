let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScorepara = document.querySelector('#userScore');
const compScorepara = document.querySelector('#computerScore');






const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};


const drawGame = () => {
    console.log("It's a draw!");
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "#081b31";
};


const showWinner =(userWins,userChoice,compChoice) => {
    if(userWins){
        console.log("You win!");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorepara.innerText =userScore;
    }else{
        console.log("you lose!");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorepara.innerText = compScore;
    }
}



const playgame = (userChoice) => {

    console.log("user choice is", userChoice);

    // computer choice
    const compChoice = genCompChoice();
    console.log("computer choice is", compChoice);

    if(compChoice === userChoice) {
    //    draw game
        drawGame();
    }else{
        let userWins = true;
        if(userChoice === 'rock'){
            userWins = compChoice === 'paper'? false : true;
        }
        else if(userChoice === 'paper'){
            userWins = compChoice === 'scissors'? false : true;
        }
        else{
            userWins = compChoice === 'rock'? false : true;
        }
        showWinner(userWins, userChoice, compChoice);
    }

}


choices.forEach((choice)=> {
    choice.addEventListener('click', ()=>{
        const userChoice = choice.getAttribute('id');
        playgame(userChoice);
    });
});