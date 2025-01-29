const getInput = require('readline-sync');
const fs = require('fs');

managers = function() {
};

memberList = function() {
};

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

    getChoice() {
        this.choice = getInput.question('Enter your choice: ');
        return this.choice;
    }
}

class FileManager {
    static readFile(filePath) {
        try {
            return fs.readFileSync(filePath, 'utf-8').split('\n');
        } catch (err) {
            console.log(`Could not load ${filePath}: ${err}`);
            return [];
        }
    }

    static writeFile(filePath, data) {
        try {
            return fs.writeFileSync(filePath, data, 'utf-8');
        } catch (writeErr) {
            console.log(`Could not write ${filePath} ${writeErr}`);
        }
    }
}

class Employee {
    constructor(firstName, lastName, managerFirstName, managerLastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.manager = {
            firstName: managerFirstName,
            lastName: managerLastName
        };
    }
}

class EmployeeService {
    static loadEmployees(data) {
        return data.map(line => {
            const token = line.split(';');
            return new Employee(token[0], token[1], token[2], token[3]);
        });
    }
}

class InvitationGenerator {
    constructor(template) {
        this.template = template;
    }

    generate(employee) {
        return this.template.replace('$firstName',employee.firstName)
        .replace('$fullName',employee.firstName + ' ' + employee.lastName)
    }

}

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
            try {
                console.log('Reading employee list from ' + fs.realpathSync(fileName));

                let data = FileManager.readFile(fileName);
                let employees = EmployeeService.loadEmployees(data);
                let invitations = employees.map(employee => invitationGenerator.generate(employee)).join('\r\n\r\n==============================\r\n\r\n');
                FileManager.writeFile('EmployeeInvitations.txt', invitations);

            } catch (err) {
                
                console.log(`Could not load employee.csv: ${err}`);
            }
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


