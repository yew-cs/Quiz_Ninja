const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonder Woman", realName: "Diana Prince" },
    { name: "Batman", realName: "Bruce Wayne" },
];
const view = {
    score: document.querySelector("#score strong"),
    question: document.getElementById("question"),
    result: document.getElementById("result"),
    info: document.getElementById("info"),
    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }
}

const game = {
    start(quiz) {
        alert('Welcome to Quiz Ninja!');
        this.questions = [...quiz];
        this.score = 0;
        //main game loop

        for (const question of this.questions) {
            this.question = question;
            this.ask();
        }
        //end of main game loop
        this.gameOver();
    },

    ask() {
        const question = `What is ${this.question.name}'s real name?`;
        const response = prompt(question);
        view.render(view.question, question);
        this.check(response);
    },
    check(response) {
        const answer = this.question.realName;
        if (response === answer) {
            view.render(view.result, 'Correct!', { 'class': 'correct' });
            alert('Correct!');
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result, `Wrong!The correct answer was ${answer}.`, { 'class': 'wrong' });
            alert(`Wrong!The correct answer was ${answer}.`);
        }
    },
    gameOver() {
        view.render(view.info, `Game over! Your score is ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}
game.start(quiz);