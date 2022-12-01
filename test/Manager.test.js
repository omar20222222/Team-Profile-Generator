const Manager = require("../Lib/Manager");

describe("Getter", () => {
  const name = " Abdurahman Ahmed";
  const id = 220;
  const email = "Abdurahman.ahmed@hotmail.com";
  const role = "Supervisor";
  const office = 23;

  const testManager = new Manager(name, id, email, role, office);

  it("Should return the Employee id when requested", () => {
    expect(testManager.getId()).toBe(id);
  });

  it("Should return the Employee email when requested", () => {
    expect(testManager.getEmail()).toBe(email);
  });

  it("Should return the Employee name when requested", () => {
    expect(testManager.getName()).toBe(name);
  });

  it("Should return the Employee role when requested", () => {
    expect(testManager.getRole()).toBe(role);
  });

  it("Should return the Employee role when requested", () => {
    expect(testManager.getOffice()).toBe(office);
  });
});
