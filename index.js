const getInput = require('readline-sync');
const fs = require('fs');

managers = function() {
};

memberList = function() {
};

var choice = 0;

do {
    console.log('');
    console.log('   Jam Invitation and Page Generator');
    console.log('   ---------------------------------');
    console.log();
    console.log('0. Exit');
    console.log('1. Create Jam Invitations For Employees & Jam Group XYZ');
    console.log('2. Create Jam Invitations For Managers & Jam Group XYZ');
    console.log('3. Create Member Overview Page');
    console.log();
    choice = getInput.question('Enter your choice: ');
    switch(choice) {
        case '0': break;
        case '1': 
            const folderName = getInput.question('Enter the name of folder with the data: ');
            const fileName = folderName + '/employees.csv';
            try {
                console.log('Reading employee list from ' + fs.realpathSync(fileName));
                const data = fs.readFileSync(fileName,'utf-8').split('\n');
                let employees = [];
                for(var line of data) {
                    let token = line.split(';');
                    let employee = {
                        employee: { firstName: token[0],
                                    lastName: token[1] },
                        manager: { firstName: (token.length === 4 ? token[2] : '' ),
                                   lastName: (token.length === 4 ? token[3] : '') }
                    }
                    employees.push(employee);
                }
                const template = "$fullName\r\n" + 
                "----------\r\n" + 
                "Hello $firstName,\r\n\r\n" + 
                "Welcome to the XYZ group!" +
                "Please accept this invitation to SAP Jam group XYZ.\r\n\r\n" + 
                "Many thanks and best regards,\r\n" + 
                "Markus Peter";
                let invitations = '';
                for(let employee of employees) {
                    invitations += template
                        .replace('$firstName',employee.employee.firstName)
                        .replace('$fullName',employee.employee.firstName
                                      + ' ' + employee.employee.lastName)
                        + '\r\n\r\n==============================\r\n\r\n';
                }
                try {
                    fs.writeFileSync('EmployeeInvitations.txt',invitations, 'utf-8');
                } catch (writeErr) {
                    console.log(`Could not write EmployeeInvitations.txt: ${writeErr}`);
                }
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
} while(choice>0);
console.log();
console.log('Goodbye!');


