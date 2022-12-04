const roleQuestion = [
  {
    type: "list",
    message: "Which employee do you want to add",
    name: "employeeRole",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

const engineerSpecificQuestion = [
  {
    type: "input",
    message: "Please type in your name:",
    name: "name",
    validate: (name) => {
      if (name) {
        return true;
      } else {
        return "Please make sure your name is correct!";
      }
    },
  },
  {
    type: "input",
    message: "Please type in your id:",
    name: "id",
    validate: (id) => {
      if (id) {
        return true;
      } else {
        return "Please make sure your id is correct!";
      }
    },
  },
  {
    type: "input",
    message: "Please type in your email:",
    name: "email",
    validate: (email) => {
      if (email) {
        return true;
      } else {
        return "Please make sure your email is correct!";
      }
    },
  },
  {
    type: "input",
    message: "Please type in your GitHub username:",
    name: "gitHub",
    validate: (gitHub) => {
      if (gitHub) {
        return true;
      } else {
        return "Please make sure your username is correct!";
      }
    },
  },
];

const internSpecificQuestion = [
  {
    type: "input",
    message: "Please type in your name:",
    name: "name",
    validate: (name) => {
      if (name) {
        return true;
      } else {
        return "Please make sure your name is correct!";
      }
    },
  },
  {
    type: "input",
    message: "Please type in your id:",
    name: "id",
    validate: (id) => {
      if (id) {
        return true;
      } else {
        return "Please make sure your id is correct!";
      }
    },
  },
  {
    type: "input",
    message: "Please type in your email:",
    name: "email",
    validate: (email) => {
      if (email) {
        return true;
      } else {
        return "Please make sure your email is correct!";
      }
    },
  },
  {
    type: "input",
    message: "Please type in the name of the School you attended:",
    name: "schoolName",
    validate: (schoolName) => {
      if (schoolName) {
        return true;
      } else {
        return "Please type in the name of the School you attended!";
      }
    },
  },
];

const managerSpecificQuestion = [
  {
    type: "input",
    message: "Please type in your name:",
    name: "name",
    validate: (name) => {
      if (name) {
        return true;
      } else {
        return "Please make sure your name is correct!";
      }
    },
  },
  {
    type: "input",
    message: "Please type in your id:",
    name: "id",
    validate: (id) => {
      if (id) {
        return true;
      } else {
        return "Please make sure your id is correct!";
      }
    },
  },
  {
    type: "input",
    message: "Please type in your email:",
    name: "email",
    validate: (email) => {
      if (email) {
        return true;
      } else {
        return "Please make sure your email is correct!";
      }
    },
  },
  {
    type: "input",
    message: "Please type in the office number:",
    name: "officeNumber",
    validate: (office) => {
      if (office) {
        return true;
      } else {
        return "Please type in the correct office number!";
      }
    },
  },
];

//exports an object containing the employee type specific questions
module.exports = {
  roleQuestion,
  engineerSpecificQuestion,
  internSpecificQuestion,
  managerSpecificQuestion,
};
