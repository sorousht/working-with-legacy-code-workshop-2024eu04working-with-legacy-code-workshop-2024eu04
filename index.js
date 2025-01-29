const getInput = require('readline-sync');
const fs = require('fs');
const Menu = require('./Menu');
const FileManager = require('./FileManager');
const EmployeeService = require('./EmployeeService');
const InvitationGenerator = require('./InvitationGenerator');

managers = function() {
};

memberList = function() {
};

const menu = new Menu();

const template = "$fullName\r\n" + 
"----------\r\n" + 
"Hello $firstName,\r\n\r\n" + 
"Welcome to the XYZ group!" +
"Please accept this invitation to SAP Jam group XYZ.\r\n\r\n" + 
"Many thanks and best regards,\r\n" + 
"Markus Peter";
const invitationGenerator = new InvitationGenerator(template);

do {
    menu.display();
    const choice = menu.getChoice();
  
    switch(choice) {
        case '0': break;
        case '1': 
            const folderName = getInput.question('Enter the name of folder with the data: ');
            const fileName = folderName + '/employees.csv';
            console.log('Reading employee list from ' + fs.realpathSync(fileName));
            const data = FileManager.readFile(fileName);
            const employees = EmployeeService.loadEmployees(data);
            const invitations = employees.map(employee => invitationGenerator.generate(employee)).join('\r\n\r\n==============================\r\n\r\n');
            FileManager.writeFile('EmployeeInvitations.txt', invitations);

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


