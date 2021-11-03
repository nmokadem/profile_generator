const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//  rl.close();
// });
const func = function() {
  const questions = [
    "What's your name? Nicknames are also acceptable : ",
    "What's an activity you like doing? ",
    "What do you listen to while doing that? ",
    "Which meal is your favourite (eg: dinner, brunch, etc.) ",
    "What's your favourite thing to eat for that meal? ",
    "Which sport is your absolute favourite? ",
    "What is your superpower? In a few words, tell us what you are amazing at! ",
  ];
  const categories = [
    "Name      : ",
    "Activity  : ",
    "Music     : ",
    "Meal      : ",
    "Food      : ",
    "Sport     : ",
    "Superpower: ",
  ];
      
  let profile = {};

  let askQuestion = function(question,i) {
    rl.question(question, (answer) => {
      if (i === 0) console.log(`Thank you for your valuable feedback: ${answer}`);
      profile[categories[i]] = answer;
      i++;
      if (i === 7) {
        rl.close();
        console.log();
        console.log();
        console.log(JSON.stringify(profile));
      } else {
        askQuestion(questions[i],i);
      }
    });
  };

  askQuestion(questions[0],0);
  // let i = 0;
  // for (let quest of questions) {
  //   rl.question(quest, (answer) => {
  //     console.log(`Thank you for your valuable feedback: ${answer}`);
  //     profile[categories[i]] = answer;
  //     i++;
  //     if (i == 6){
  //       rl.close();
  //       console.log(JSON.stringify(profile));
  //     }
  //   });
  // }
};

func();
