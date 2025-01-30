const Menu = require('./Menu');
const FileManager = require('./FileManager');
const EmployeeFileService = require('./EmployeeFileService');
const EmployeeDatabaseService = require('./EmployeeDatabaseService');
const ManagerDatabaseService = require('./ManagerDatabaseService');
const InvitationGenerator = require('./InvitationGenerator');
const constants = require("./constants");

class Application {
    constructor(menu, invitationGenerator, fileManager, employeeFileService, employeeDatabaseService, managerDatabaseService) {
        this.menu = menu;
        this.invitationGenerator = invitationGenerator;
        this.fileManager = fileManager;
        this.employeeFileService = employeeFileService;
        this.employeeDatabaseService = employeeDatabaseService;
        this.managerDatabaseService = managerDatabaseService;
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
            case constants.EXIT: break;
            case constants.GENERATOR_EMPLOYEE_CSV:
                await this.employeesCSV();
                break;
            case constants.GENERATOR_EMPLOYEE_DB: 
                await this.employeesDatabase();
                break;      
            case constants.GENERATOR_MANAGER:
                await this.managers();
                break;
            case constants.GENERATOR_OVERVIEW_PAGE:
                this.memberList();
                break;
            default:
                console.log('Please enter a number within the range listed above.');
        }
    }

    async employeesCSV() {
        const dataSource = this.menu.filePathQuestion();
        const employees = this.employeeFileService.loadEmployees(dataSource);
        this.fileManager.writeFile(constants.EMPLOYEE_INVITELIST_NAME, this.invitationGenerator.generate(employees));
    }

    async employeesDatabase() {
        const employees = await this.employeeDatabaseService.loadEmployees();
        this.fileManager.writeFile(constants.EMPLOYEE_INVITELIST_NAME, this.invitationGenerator.generate(employees));
    }

    async managers() {
        const managers = await this.managerDatabaseService.loadManagers();
        this.fileManager.writeFile(constants.MANAGER_INVITELIST_NAME, this.invitationGenerator.generate(managers));
    }

    memberList() {
        // Implement memberList functionality
    }
}

const menu = new Menu();
const invitationGenerator = new InvitationGenerator();
const fileManager = new FileManager();
const employeeFileService = new EmployeeFileService();
const employeeDatabaseService = new EmployeeDatabaseService();
const managerDatabaseService = new ManagerDatabaseService();

const app = new Application(menu, invitationGenerator, fileManager, employeeFileService, employeeDatabaseService, managerDatabaseService);
app.run();