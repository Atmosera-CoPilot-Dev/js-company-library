// require the Employee class
const Employee = require('./Employee');


class Manager extends Employee {
    // TODO Implement error handling for the constructor. 
    constructor(id, name, salary, department) {
        super(id, name, salary);
        this.department = department;
    }

    getDetails() {
        return `${super.getDetails()} and manages the ${this.department} department`;
    }

    // TODO: Implement a getDepartment method. It should return the department of the manager.
    

}

module.exports = Manager;