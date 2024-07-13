// count down time project
import inquirer from 'inquirer';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function countdown(seconds: number): Promise<void> {
    while (seconds >= 0) {
        console.clear();
        console.log(`Time left: ${seconds}s`);
        await sleep(1000);
        seconds--;
    }
    console.log('Time\'s up!');
}

async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'seconds',
            message: 'Enter the number of seconds for the countdown:',
            validate: (input: number | undefined) => {
                if (typeof input !== 'number' || isNaN(input) || input <= 0) {
                    return 'Please enter a positive number';
                }
                return true;
            }
        }
    ]);

    await countdown(answers.seconds);
}

main();
