const EmployeeFileService = require('../EmployeeFileService');
const Employee = require('../Employee');
const FileManager = require('../FileManager');
const fs = require('fs');

jest.mock('../FileManager');
jest.mock('fs');

describe('EmployeeFileService', () => {
    let employeeFileService;
    let mockFileManagerInstance;

    beforeEach(() => {
        mockFileManagerInstance = {
            readFile: jest.fn()
        };
        FileManager.mockImplementation(() => mockFileManagerInstance);
        employeeFileService = new EmployeeFileService();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should load employees from data source', () => {
        const dataSource = 'path/to/dataSource';
        const fileContent = [
            'First Name;Last Name;Manager First Name;Manager Last Name',
            'Adam;Adams;William;Allen',
            'Andrea;Anderson;Tony;Blair'
        ];
        const expectedEmployees = [
            new Employee('Adam', 'Adams', 'William', 'Allen'),
            new Employee('Andrea', 'Anderson', 'Tony', 'Blair')
        ];

        fs.realpathSync.mockReturnValue(dataSource);
        mockFileManagerInstance.readFile.mockReturnValue(fileContent);

        const employees = employeeFileService.loadEmployees(dataSource);

        expect(fs.realpathSync).toHaveBeenCalledWith(dataSource);
        expect(mockFileManagerInstance.readFile).toHaveBeenCalledWith(dataSource);
        expect(employees).toEqual(expectedEmployees);
    });
});