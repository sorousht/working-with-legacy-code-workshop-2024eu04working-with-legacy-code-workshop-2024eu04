## Thoughts

Test is optional for the JavaScript solution.
2 h on refactoring and 1 h on new feature

Markus
We decided to go with OOP style. First defined the Menu class to give the responsibility of user interaction.
Same as above, the responsibility of I/O is given to FileManager with readFile and writeFile functionality.
To be able to test the FileManager in isolation

We can have a n option in the menu to read from DB and another method (to the file manager?) to read from db.

To extract data read/write from the main functionality, we came up with the idea of EmployeeService. With this service we can load the employees from the file and pave the road to load it from database later.

Employee class to store the employee details

Invitation generator is a flexible class that receives the template from outside and stringifies an employee  

Next step is extracting the classes into individual files.

There are some constants and templates which we attempted to extract and place in a constant file as a configuration for the application.
