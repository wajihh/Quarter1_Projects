// simple calculator project
import inquirer from 'inquirer';

type QuestionCollection<T = any> = inquirer.QuestionCollection<T>;

async function main() {
    const questions: QuestionCollection = [
        {
            type: 'list',
            name: 'operation',
            message: 'Choose an operation:',
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
        },
        {
            type: 'number',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (input: number | undefined) => {
                if (typeof input !== 'number' || isNaN(input)) {
                    return 'Please enter a valid number';
                }
                return true;
            }
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter the second number:',
            validate: (input: number | undefined) => {
                if (typeof input !== 'number' || isNaN(input)) {
                    return 'Please enter a valid number';
                }
                return true;
            }
        }
    ];

    const answers = await inquirer.prompt(questions);

    const { operation, num1, num2 } = answers;

    let result: number;
    switch (operation) {
        case 'Addition':
            result = num1 + num2;
            break;
        case 'Subtraction':
            result = num1 - num2;
            break;
        case 'Multiplication':
            result = num1 * num2;
            break;
        case 'Division':
            if (num2 === 0) {
                console.log('Error: Division by zero');
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.log('Unknown operation');
            return;
    }

    console.log(`The result of ${operation.toLowerCase()} is: ${result}`);
}

main();
