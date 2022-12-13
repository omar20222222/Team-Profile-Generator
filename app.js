//this imports the "inquirer" and "path" packages
const inquirer = require("inquirer");
const path = require("path");

//constructor functions
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//const {questions} = require("./utils/questions");
const {
  roleQuestion,
  engineerSpecificQuestion,
  managerSpecificQuestion,
  internSpecificQuestion,
} = require("./utils/employeequestions");
const myEmployeesArray = [];

const generateHTML = require("./utils/generatorHTML");
const fs = require("fs");

//const writeToFile = () => {};

//this sets the filepath for the function that writes the html
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team-profile.html");

//this will ask the user if he wants to add another employee and based on the response it will either re-prompt the questions or exit the app;
const addAnotherEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add an employee?",
        name: "addEmployee",
        choices: ["Yes", "No"],
      },
    ])
    .then((response) => {
      if (response.addEmployee === "Yes") {
        init();
      } else {
        console.info(
          "+++++++ Your Team profile was successfully generated +++++++"
        );
        buildTeam();
      }
    });
};

// empty employees array
const buildTeam = () => {
  console.log(myEmployeesArray);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  const html = generateHTML(myEmployeesArray);
  console.log(html);
  fs.writeFileSync(outputPath, generateHTML(myEmployeesArray), "utf-8");
};

//this will initialize the app
const init = async () => {
  try {
    //prompts the questions
    const answers = await inquirer.prompt(roleQuestion);
    // asks specific questions based on the type of the employee that the user chose
    if (answers.employeeRole === "Manager") {
      const response = await inquirer.prompt(managerSpecificQuestion);
      const TeamManager = new Manager(
        response.name,
        response.id,
        response.email,
        response.employeeRole,
        response.officeNumber
      );
      // pushes the employee into the employee array
      myEmployeesArray.push(TeamManager);
    } else if (answers.employeeRole === "Engineer") {
      const engineerResponse = await inquirer.prompt(engineerSpecificQuestion);
      const TeamEngineer = new Engineer(
        engineerResponse.name,
        engineerResponse.id,
        engineerResponse.email,
        engineerResponse.employeeRole,
        engineerResponse.gitHub
      );
      // pushes the employee into the employee array
      myEmployeesArray.push(TeamEngineer);
    } else if (answers.employeeRole === "Intern") {
      const internResponse = await inquirer.prompt(internSpecificQuestion);
      const TeamIntern = new Intern(
        internResponse.name,
        internResponse.id,
        internResponse.email,
        internResponse.employeeRole,
        internResponse.schoolNames
      );
      // pushes the employee into the employee array
      myEmployeesArray.push(TeamIntern);
    }

    addAnotherEmployee();
    // return answers;
    // if (answers.addEmployee === true) {
    //   init();
    // } else {
    //   //this will run the functions that generate the html and the write it to file
    //   const html = generateHTML(myEmployeesArray);
    //   writeToFile(html, outputPath);
    // }
  } catch (err) {
    console.log(err);
  }
};

init();
