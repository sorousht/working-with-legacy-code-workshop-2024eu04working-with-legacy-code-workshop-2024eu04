const fs = require('fs');

class FileManager {
    readFile(filePath) {
        try {
            return fs.readFileSync(filePath, 'utf-8').split('\n');
        } catch (err) {
            console.log(`Could not load ${filePath}: ${err}`);
            return [];
        }
    }

    writeFile(filePath, data) {
        try {
            return fs.writeFileSync(filePath, data, 'utf-8');
        } catch (writeErr) {
            console.log(`Could not write ${filePath} ${writeErr}`);
        }
    }
}
module.exports = FileManager;