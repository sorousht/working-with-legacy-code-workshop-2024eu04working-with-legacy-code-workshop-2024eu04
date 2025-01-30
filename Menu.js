const getInput = require('readline-sync');
const { DISPLAY } = require('./constants');
class Menu {
    constructor() {
        this.choice = 0;
    }

    display() {
        console.log(DISPLAY)
    }

    mainMenuQuestion() {
        this.choice = getInput.question('Enter your choice: ');
        return this.choice;
    }

    filePathQuestion() {
        const folderName = getInput.question('Enter the name of folder with the data: ');
        return folderName + '/employees.csv';
    }
}
module.exports = Menu;