const getInput = require('readline-sync');
const { DISPLAY } = require('./constants');
class Menu {
    constructor() {
        this.choice = 0;
    }
    display() {
        console.log(DISPLAY)
    }

    getInput() {
        this.choice = getInput.question('Enter your choice: ');
        const folderName = getInput.question('Enter the name of folder with the data: ');
        const fileName = folderName + '/employees.csv';
        return {
            choice: this.choice,
            dataSource: fileName
        };
    }
}
module.exports = Menu;