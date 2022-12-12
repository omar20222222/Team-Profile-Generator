const Intern = require("../Lib/Intern");

describe("Getter", () => {
  const name = " Abdurahman Ahmed";
  const id = 220;
  const email = "Abdurahman.ahmed@hotmail.com";
  const role = "Supervisor";
  const school = "StAlbans";

  const testIntern = new Intern(name, id, email, role, school);

  it("Should return the Employee id when requested", () => {
    expect(testIntern.getId()).toBe(id);
  });

  it("Should return the Employee email when requested", () => {
    expect(testIntern.getEmail()).toBe(email);
  });

  it("Should return the Employee name when requested", () => {
    expect(testIntern.getName()).toBe(name);
  });

  it("Should return the Employee role when requested", () => {
    expect(testIntern.getRole()).toBe(role);
  });

  it("Should return the Employee role when requested", () => {
    expect(testIntern.getSchool()).toBe(school);
  });
});
