const Menu = require('./Menu');
const FileManager = require('./FileManager');
const EmployeeService = require('./EmployeeService');
const InvitationGenerator = require('./InvitationGenerator');
const { TEMPLATE } = require("./constants");

managers = function() {
};

memberList = function() {
};

const menu = new Menu();

const invitationGenerator = new InvitationGenerator(TEMPLATE);

do {
    menu.display();
    const input = menu.getInput();
  
    switch(input.choice) {
        case '0': break;
        case '1': 
            const employees = EmployeeService.loadEmployees(input.dataSource);
            FileManager.writeFile('EmployeeInvitations.txt', invitationGenerator.generate(employees));

            break;
        case '2':
            managers();
            break;
        case '3': 
            memberList();
            break;
        default:
            console.log('Please enter a number within the range listed above.');
    }
} while(menu.choice>0);
console.log();
console.log('Goodbye!');
