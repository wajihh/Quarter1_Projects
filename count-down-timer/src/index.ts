// count down time project
import inquirer from 'inquirer';

async function main() {
    const questions: inquirer.QuestionCollection = [
        {
            type: 'list',
            name: 'operation',
            message: 'Choose an operation:',
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
        },
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (input: string) => {
                const number = parseFloat(input);
                if (isNaN(number)) {
                    return 'Please enter a valid number';
                }
                return true;
            },
            filter: (input: string) => parseFloat(input)
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
            validate: (input: string) => {
                const number = parseFloat(input);
                if (isNaN(number)) {
                    return 'Please enter a valid number';
                }
                return true;
            },
            filter: (input: string) => parseFloat(input)
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
