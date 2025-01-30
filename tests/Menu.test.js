const getInput = require('readline-sync');
const Menu = require('../Menu');
const { MAIN_MENU } = require("../constants");
jest.mock('readline-sync');

describe('Menu', () => {
    let menu;

    beforeEach(() => {
        menu = new Menu();
    });

    test('should initialize with choice 0', () => {
        expect(menu.choice).toBe(0);
    });

    test('should display the correct message', () => {
        console.log = jest.fn();
        menu.display();
        expect(console.log).toHaveBeenCalledWith(MAIN_MENU);
    });

    test('should get input for main menu and return correct choice', () => {
        getInput.question.mockReturnValueOnce('1');
        const choice = menu.mainMenuQuestion();
        expect(choice).toBe('1');
        expect(menu.choice).toBe('1');
    });

    test('should get input for file path and return correct path', () => {
        getInput.question.mockReturnValueOnce('testFolder');
        const filePath = menu.filePathQuestion();
        expect(filePath).toBe('testFolder/employees.csv');
    });
});