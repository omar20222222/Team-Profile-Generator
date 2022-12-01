const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, role, office) {
    super(name, id, email, role);
    this.office = office;
  }

  getOffice() {
    office;
    return this.office;
  }
}

module.exports = Manager;
