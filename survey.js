const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {};

rl.question("What's your name? Nicknames are also acceptable :)\n", (response) => {
  answers.name = response;
  rl.question("What's an activity you like doing?\n", (response) => {
    answers.activity = response;
    rl.question("What do you listen to while doing that?\n", (response) => {
      answers.music = response;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (response) => {
        answers.meal = response;
        rl.question("What's your favourite thing to eat for that meal?\n", (response) => {
          answers.food = response;
          rl.question("Which sport is your absolute favourite?\n", (response) => {
            answers.sport = response;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (response) => {
              answers.superpower = response;
              console.log(`${answers.name} loves ${answers.activity} while listening to ${answers.music}. They love to eat ${answers.food} for ${answers.meal}. Their favourite sport is ${answers.sport} and their superpower is ${answers.superpower}`);
              rl.close();
            })
          })
        })
      })
    })
  })
});