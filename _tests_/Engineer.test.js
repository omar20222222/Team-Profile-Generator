const Engineer = require("../Lib/Engineer");

describe("Getters", () => {
  const name = " Abdurahman Ahmed";
  const id = 220;
  const email = "Abdurahman.ahmed@hotmail.com";
  const role = "Supervisor";
  const github = "omar20222222";

  const testEngineer = new Engineer(name, id, email, role, github);

  it("Should return the Employee id when requested", () => {
    expect(testEngineer.getId()).toBe(id);
  });

  it("Should return the Employee email when requested", () => {
    expect(testEngineer.getEmail()).toBe(email);
  });

  it("Should return the Employee name when requested", () => {
    expect(testEngineer.getName()).toBe(name);
  });

  it("Should return the Employee role when requested", () => {
    expect(testEngineer.getRole()).toBe(role);
  });

  it("Should return the Employee github when requested", () => {
    expect(testEngineer.getGithub()).toBe(github);
  });
});
