//Sets the questions in an array!
const quiz = [
	["What is Superman's real name?", "Clark Kent"],
	["What is Wonder Woman's real name?", "Diana Prince"],
	["What is Batman's real name?", "Bruce Wayne"]
	];

//initialize score
let score = 0;

//Get response to questions from player
for (const[questions,answer]of quiz){
	const response = prompt(questions);
	if(response ===answer){
		alert('Correct!');
		score++;
	}else{
		alert(`Wrong!The correct answer was ${answer}`);
	}
}

//End of game, report the player's score
alert(`Game over! Your score is ${score} point${score !== 1 ? 's' :''}`);