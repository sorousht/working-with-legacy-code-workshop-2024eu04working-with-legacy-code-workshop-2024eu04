const Menu = require('./Menu');
const FileManager = require('./FileManager');
const EmployeeFileService = require('./EmployeeFileService');
const EmployeeDatabaseService = require('./EmployeeDatabaseService');
const InvitationGenerator = require('./InvitationGenerator');
const { TEMPLATE } = require("./constants");

managers = function () {
};

memberList = function () {
};


main();

async function main() {
    const menu = new Menu();
    const invitationGenerator = new InvitationGenerator(TEMPLATE);

    do {
        menu.display();
        menu.mainMenuQuestion();
        switch (menu.choice) {
            case '0': break;
            case '1': {
                const dataSource = menu.filePathQuestion();
                const employees = EmployeeFileService.loadEmployees(dataSource);
                FileManager.writeFile('EmployeeInvitations.txt', invitationGenerator.generate(employees));
                break;
            }
            case '2': {
                const employees = await EmployeeDatabaseService.loadEmployees();
                FileManager.writeFile('EmployeeInvitations.txt', invitationGenerator.generate(employees));
                break;
            }
            case '3':
                managers();
                break;
            case '4':
                memberList();
                break;
            default:
                console.log('Please enter a number within the range listed above.');
        }
    } while (menu.choice > 0);

    console.log();
    console.log('Goodbye!');
}

