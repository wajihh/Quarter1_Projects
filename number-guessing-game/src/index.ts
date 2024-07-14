import inquirer from 'inquirer';

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const main = async () => {
  const randomNumber = getRandomNumber(1, 100);
  let attempts = 0;
  let guessedCorrectly = false;

  console.log('Welcome to the Number Guessing Game!');
  console.log('I have selected a random number between 1 and 100. Try to guess it!');

  while (!guessedCorrectly) {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'guess',
        message: 'Enter your guess:',
        validate: (input) => {
          const guess = Number(input);
          if (isNaN(guess) || guess < 1 || guess > 100) {
            return 'Please enter a valid number between 1 and 100.';
          }
          return true;
        }
      }
    ]);

    const guess = Number(answers.guess);
    attempts++;

    if (guess === randomNumber) {
      console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
      guessedCorrectly = true;
    } else if (guess < randomNumber) {
      console.log('Too low! Try again.');
    } else {
      console.log('Too high! Try again.');
    }
  }
};

main().catch(error => console.error(error));
