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
                "I am sorry to see that you have decided to enter. But the decision has been made. Before you you see a very large and heavy door.\nAs you approach you notice it trembling in its frame despite it's incredible weight.\nIt has no handle but you place your hand on it. It's so cold that it burns your skin.\nThere is a large heavy knocker. A ring in a goats mouth.\n\n\nIf you knock, you will surely burn your hand again.\nWhat do you do?\n\nKnock or leave",
            answers: {
                knock: {
                    q:
                        "You pull your sleeve over your hand, reach up and lift the incredibly heavy knocker. It creaks as you struggle to lift it. You let it go and a resounding boom echos through the door.\n\nYou lift it again, this time feeling the vibrations of the knock. On the third knock something shudders through the floor, walls and door as it slowly opens. A rush of stale dusty air filled with the smell of ash and something oddly sweet hits your nostrils.\n\nDo you go in?\n\n Yes or No",
                    answers: {
                        yes: {
                            q:
                                "As you enter into the space beyond the door, you are amazed by the sheer scale of what you see. It is an enclosed space but with unimaginable proportions. The walls to the left and right of you go on with only the slightest of curves in both directions and you cannot see where they end. As you look up you see the same thing. The cieling must be there somewhere, but in the darkness you cannot see it.\n\nYou notice that the ground ends just a few meters ahead of you and there appears to be a bridge of some sort. You walk up to it and see that the ground drops off in a sheer cliff and if there is a bottom you certainly can't see it.\n\nYou look back at the still open door, and back to the narrow footbridge with no end in sight. Which way will you choose?\n\nBridge or Door?",
                            answers: {
                                bridge:
                                    "As you step onto the bridge the door slams shut behund you with a deafening boom! You think to yourself, 'Looks like there's no going back now.' You start walking.\n\n\n\n\n\n\n\n\n\nAnd walking....\n\n\n\n\n\n\n\nand walking...\n\n\n\n\n\n\n\n\n\nand walking... \nThe bridge never ends. Eventually you lay down exhausted and sleep. While you sleep your roll off the bridge and fall into the bottomless chasm.",
                                door:
                                    "You turn to head for the door but as you approach it, it starts to close. You start running! It's almost shut but you have to get through. You jump at the last minite...\n\n\n\n\n\nThe door closes on your abdomen cutting you in half. You watch yourself bleed out and die in utter agony.",
                            },
                        },
                        no:
                            "You turn around to leave, but the door slams shut with such force that you are knocked back. The ground opens up beneath you and you fall down a never ending shaft, screaming into the darkness",
                    },
                },
                leave: wellChosen,
            },
        },
        yes: wellChosen,
    },
};

askQuestion(story);

function askQuestion(storyObj) {
    // console.log("story top ", storyObj.q);

    rl.question(chalk.red(storyObj.q), (answerInput) => {
        const lcAnswer = answerInput.toLocaleLowerCase();

        if (storyObj.answers && storyObj.answers[lcAnswer]) {
            const answer = storyObj.answers[lcAnswer];
            if (answer.q) {
                console.log("has question", typeof answer);

                askQuestion(answer);
            } else {
                console.log(answer);
                rl.close();
            }
        } else {
            console.log(
                chalk.bgRed.white("I didn't understand that. Try again.")
            );
            askQuestion(storyObj);
        }
    });
}
