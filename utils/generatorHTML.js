// const Manager = require("../Team-Profile-Generator/Lib/Manager");
// const Engineer = require("../Team-Profile-Generator/Lib/Engineer");
// const Intern = require("../Team-Profile-Generator/Lib/Intern");
// const Employee = require("../Team-Profile-Generator/Lib/Employee");

const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateManagerCard = (employee) => {
  return `<div class="col-sm-6 col-md-4 col-lg-3 mt-3">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <div class="card-text">Name: ${employee.name}</div>
      <div class="card-text">Id: ${employee.id}</div>
      <div class="card-text">Email: ${employee.email}</div>
    </div>
  </div>
</div>`;
};

const generateEngineerCard = (employee) => {
  return `<div class="col-sm-6 col-md-4 col-lg-3 mt-3">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Engineer</h5>
      <div class="card-text">Name: ${employee.name}</div>
      <div class="card-text">Id: ${employee.id}</div>
      <div class="card-text">Email: ${employee.email}</div>
      <div class="card-text">GitHub Profile: https://github.com/omar20222222/Team-Profile-Generator/blob/main/Lib/Engineer.js}</div>
    </div>
  </div>
</div>`;
};

const generateInternCard = (employee) => {
  return `<div class="col-sm-6 col-md-4 col-lg-3 mt-3">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Intern</h5>
      <div class="card-text">Name: ${employee.name}</div>
      <div class="card-text">Id: ${employee.id}</div>
      <div class="card-text">Email: ${employee.email}</div>
    </div>
  </div>
</div>`;
};

const generateHTML = (myEmployeesArray) => {
  const cards = [];
  //generates a card with specific fields to the type of employee (manager, engineer or intern)
  const generateCard = (employee) => {
    if (employee instanceof Manager) {
      cards.push(generateManagerCard(employee));
    } else if (employee instanceof Engineer) {
      cards.push(generateEngineerCard(employee));
    } else if (employee instanceof Intern) {
      cards.push(generateInternCard(employee));
    }
  };
  //iterates through the array of employees and generates a card for each one of them
  myEmployeesArray.map((employee) => generateCard(employee));

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
        crossorigin="anonymous"
      />
  
      <title>Team Profile Generator</title>
    </head>
    <body>
      <header class="blog-header py-3 bg-primary">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-12 text-center">
            <div class="blog-header-logo text-light h1">My Team</div>
          </div>
        </div>
      </header>
  
      <div class="container mt-5">
      ${cards.join("")}
      </div>
  
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `;
};

module.exports = generateHTML;
