const getInput = require('readline-sync');
class Menu {
    constructor() {
        this.choice = 0;
    }
    display() {
        console.log('');
        console.log('   Jam Invitation and Page Generator');
        console.log('   ---------------------------------');
        console.log();
        console.log('0. Exit');
        console.log('1. Create aJam Invitations For Employees & Jam Group XYZ');
        console.log('2. Create Jam Invitations For Managers & Jam Group XYZ');
        console.log('3. Create Member Overview Page');
        console.log(); 
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