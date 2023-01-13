#! /usr/bin/env node 

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

const sleep = () => {
    return new Promise ((res,rej)=>{
        setTimeout(res, 1000)
    })
}

async function welcome() {
    const rainbowTittle = chalkAnimation.rainbow(`----------Lets Start Program----------`);
    await sleep();
    rainbowTittle.stop();
    
}
//welcome();

async function askQuestion() {
    await welcome();
    let que = await inquirer.prompt([
        {
        type : "input",
        name : "str",
        message: chalk.rgb(187, 143, 206)(`plesae enter the paragraph you want to convert :`)
        }
    ])

    const word_arr = que.str.split(" ");
    console.log(word_arr);
    console.log(`words in paragraph: ${word_arr.length}`);


    const chr_withoutspaces = que.str.replace(/ /g, " ");
    console.log(`characters in paragraph: ${chr_withoutspaces.length}`);

    
}

async function startAgain(){
    do{
        await askQuestion();
        var playAgain = await inquirer.prompt([{
            type : "input",
            name : "restart",
            message : chalk.rgb(187, 143, 206)(`Do You Want To Restart? press y or N`)
        }])
    }while(playAgain.restart === 'y' || playAgain.restart === 'yes' || playAgain.restart === 'Y' || playAgain.restart === 'YES')
}
startAgain();
