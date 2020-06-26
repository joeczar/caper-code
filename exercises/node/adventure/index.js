const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const wellChosen =
    "You have chosen well. Go home to your loved ones and be glad that you still have them.";
const story = {
    q:
        "There are places you shouldn't go.\nPlaces that are dark.\nPlaces that eat away at your soul\nThis is one of those places.\n\n\nIf you enter here, you will never be the same and you can never go back.\nTurn back now or face your worst nightmares\n\nWill you turn back?\n\nYes or No",
    answers: {
        no: {
            q:
                "I am sorry to see that you have decided to enter. But the decision has been made. Before you you see a very large and heavy door.\nAs you approach you notice it trembling in its frame despite it's incredible weight.\nIt has no handle but you place your hand on it. It's so cold that it burns your skin.\nThere is a large heavy knocker. A ring in a goats mouth.\n\n\nIf you knock, you will surely burn your hand again.\nWhat do you do?\n\nKnock - Yes, leave - No",
            answers: {
                yes: {
                    q: "Question 3",
                },
                no: wellChosen,
            },
        },
        yes: wellChosen,
    },
};
const test = {
    q: "question 1",
    answers: {
        yes: {
            q: "question 2",
            answers: {
                yes: "hi",
                // {
                //     q: "question 3",
                //     answers: {
                //         yes: "thank you",
                //         no: "ok, by",
                //     },
                // },
                no: "no, bye",
            },
        },
        no: "no, bye",
    },
};

askQuestion(test);

function askQuestion(storyObj) {
    // console.log("story top ", storyObj.q);

    rl.question(chalk.red(storyObj.q), (answerInput) => {
        console.log(answerInput);

        const lcAnswer = answerInput.toLocaleLowerCase();
        const answer = storyObj.answers[lcAnswer];

        if (answer) {
            if (answer.q) {
                console.log("has question", answer);

                askQuestion(answer);
            } else {
                console.log("no question", answer);
            }

            rl.close();
        } else {
            console.log(
                chalk.bgRed.white("I didn't understand that. Try again.")
            );
            askQuestion(storyObj);
        }
    });
}
