## Questions

1. Which of the naming, SOLID and DRY principles did the original code violate and did you address? 
   1. Single responsibility, because of too many responsibilities that `index.js` had
   2. DRY - Too many repeated because of console.log for the output generation
   3. Interface Segregation - We introduced multiple services to read from file and database following the same contract 
  
  
2. Which of the techniques described on GitHub page Code Level Patterns for Test Isolation in Legacy Code (or in the literature) did you apply?
   1. Keep the constructor as minimal as possible

3. Which steps precisely did you perform to improve the legacy code and make sure that it still works as before? You don't have to be able to repeat the steps live, or screen-record and replay them. But you may want to take snapshots of intermediate stages of the code while you perform the refactoring.
   1. We ran the program every time with introducing new changes and refactoring, made sure that we get the expected results. Along the way, we introduced unit tests for the newly extracted modules. Those unit tests gave us more confidence with refactoring.  

4. Where and how does your resulting code better adhere to the Clean Code principles? Be as precise as possible again. If you addressed a violation of "S", for example, describe where the different responsibilities are now taken care of separately.
   1. The constants file follows the Open-closed principle
   2. Better naming
   3. OOP style
   4. Modular style with single responsibility


## Thoughts

Test is optional for the JavaScript solution.
2 h on refactoring and 1 h on new feature

We decided to go with OOP style.

There was a main function with mix of responsibilities. We went for separation of concerns and extracted code into individual components. Single Responsibility in SOLID principles.

First defined the Menu class to give the responsibility of user interaction.


Same as above, the responsibility of I/O is given to FileManager with readFile and writeFile functionality.


To be able to test the FileManager in isolation

We can have a n option in the menu to read from DB and another method (to the file manager?) to read from db.

To extract data read/write from the main functionality, we came up with the idea of EmployeeService. With this service we can load the employees from the file and pave the road to load it from database later.

Employee class to store the employee details

Invitation generator is a flexible class that receives the template from outside and stringifies an employee  

Next step is extracting the classes into individual files.

There are some constants and templates which we attempted to extract and place in a constant file as a configuration for the application.

We introduced a sqlite database with a dedicated service
