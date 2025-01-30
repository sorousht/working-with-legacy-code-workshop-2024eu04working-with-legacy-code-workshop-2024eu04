const fs = require('fs');
const FileManager = require('../FileManager');

jest.mock('fs');

describe('FileManager', () => {
    describe('readFile', () => {
        it('should read file and return its content as an array of lines', () => {
            const filePath = 'test.txt';
            const fileContent = 'line1\nline2\nline3';
            fs.readFileSync.mockReturnValue(fileContent);

            const fileManager = new FileManager();
            const result = fileManager.readFile(filePath);

            expect(fs.readFileSync).toHaveBeenCalledWith(filePath, 'utf-8');
            expect(result).toEqual(['line1', 'line2', 'line3']);
        });

        it('should return an empty array if file reading fails', () => {
            const filePath = 'test.txt';
            fs.readFileSync.mockImplementation(() => {
                throw new Error('File not found');
            });

            const fileManager = new FileManager();
            const result = fileManager.readFile(filePath);

            expect(fs.readFileSync).toHaveBeenCalledWith(filePath, 'utf-8');
            expect(result).toEqual([]);
        });
    });

    describe('writeFile', () => {
        it('should write data to file', () => {
            const filePath = 'test.txt';
            const data = 'some data';

            const fileManager = new FileManager();
            fileManager.writeFile(filePath, data);

            expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, data, 'utf-8');
        });

        it('should log an error if file writing fails', () => {
            const filePath = 'test.txt';
            const data = 'some data';
            const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
            fs.writeFileSync.mockImplementation(() => {
                throw new Error('Write error');
            });

            const fileManager = new FileManager();
            fileManager.writeFile(filePath, data);

            expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, data, 'utf-8');
            expect(consoleSpy).toHaveBeenCalledWith(`Could not write ${filePath} Error: Write error`);

            consoleSpy.mockRestore();
        });
    });
});