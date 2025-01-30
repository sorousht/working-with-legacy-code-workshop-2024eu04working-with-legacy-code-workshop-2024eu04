const Menu = require('./Menu');
const FileManager = require('./FileManager');
const EmployeeFileService = require('./EmployeeFileService');
const EmployeeDatabaseService = require('./EmployeeDatabaseService');
const InvitationGenerator = require('./InvitationGenerator');
const { INVITATION_TEMPLATE } = require("./constants");

class Application {
    constructor(menu, invitationGenerator, fileManager, employeeFileService, employeeDatabaseService) {
        this.menu = menu;
        this.invitationGenerator = invitationGenerator;
        this.fileManager = fileManager;
        this.employeeFileService = employeeFileService;
        this.employeeDatabaseService = employeeDatabaseService;
    }

    async run() {
        do {
            this.menu.display();
            this.menu.mainMenuQuestion();
            await this.handleMenuChoice(this.menu.choice);
        } while (this.menu.choice > 0);

        console.log();
        console.log('Goodbye!');
    }

    async handleMenuChoice(choice) {
        switch (choice) {
            case '0': break;
            case '1': {
                const dataSource = this.menu.filePathQuestion();
                const employees = this.employeeFileService.loadEmployees(dataSource);
                this.fileManager.writeFile('EmployeeInvitations.txt', this.invitationGenerator.generate(employees));
                break;
            }
            case '2': {
                const employees = await this.employeeDatabaseService.loadEmployees();
                this.fileManager.writeFile('EmployeeInvitations.txt', this.invitationGenerator.generate(employees));
                break;
            }
            case '3':
                this.managers();
                break;
            case '4':
                this.memberList();
                break;
            default:
                console.log('Please enter a number within the range listed above.');
        }
    }

    managers() {
        // Implement managers functionality
    }

    memberList() {
        // Implement memberList functionality
    }
}

const menu = new Menu();
const invitationGenerator = new InvitationGenerator(INVITATION_TEMPLATE);
const fileManager = new FileManager();
const employeeFileService = new EmployeeFileService();
const employeeDatabaseService = new EmployeeDatabaseService();

const app = new Application(menu, invitationGenerator, fileManager, employeeFileService, employeeDatabaseService);
app.run();