"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// count down time project
const inquirer_1 = __importDefault(require("inquirer"));
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
async function countdown(seconds) {
    while (seconds >= 0) {
        console.clear();
        console.log(`Time left: ${seconds}s`);
        await sleep(1000);
        seconds--;
    }
    console.log('Time\'s up!');
}
async function main() {
    const answers = await inquirer_1.default.prompt([
        {
            type: 'number',
            name: 'seconds',
            message: 'Enter the number of seconds for the countdown:',
            validate: (input) => {
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
