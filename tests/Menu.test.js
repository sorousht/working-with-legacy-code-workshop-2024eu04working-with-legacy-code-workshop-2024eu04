jest.mock('readline-sync');
const getInput = require('readline-sync');
const Menu = require('../Menu');
const { DISPLAY } = require("../constants");

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
        expect(console.log).toHaveBeenCalledWith(DISPLAY);
    });

    test('should get input and return correct data', () => {
        getInput.question.mockReturnValueOnce('1').mockReturnValueOnce('testFolder');
        const result = menu.getInput();
        expect(result).toEqual({
            choice: '1',
            dataSource: 'testFolder/employees.csv'
        });
    });
});