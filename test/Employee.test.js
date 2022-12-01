const Employee = require("../Lib/Employee");

describe("Getters", () => {
  const name = " Abdurahman Ahmed";
  const id = 220;
  const email = "Abdurahman.ahmed@hotmail.com";
  const role = "Supervisor";

  const testEmployee = new Employee(name, id, email, role);

  it("Should return the Employee id when requested", () => {
    expect(testEmployee.getId()).toBe(id);
  });

  it("Should return the Employee email when requested", () => {
    expect(testEmployee.getEmail()).toBe(email);
  });

  it("Should return the Employee name when requested", () => {
    expect(testEmployee.getName()).toBe(name);
  });

  it("Should return the Employee role when requested", () => {
    expect(testEmployee.getRole()).toBe(role);
  });
});
