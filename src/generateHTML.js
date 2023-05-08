const fs = require('fs');
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateHTML = (team) => {
    const teamFolder = team.map(employee => {
      let iEl, roleAttribute;
      if (employee.getRole() === 'Manager') {
        iEl = '<i class="fa-solid fa-mug-hot"></i>';
        roleAttribute = `Office Number = ${employee.officeNumber}`;
      } else if (employee.getRole() === 'Engineer') {
        iEl = '<i class="fa-solid fa-glasses"></i>';
        roleAttribute = `GitHub = <a target="_blank" href="https://github.com/${employee.github}">${employee.github}</a>`;
      } else {
        iEl = '<i class="fa-solid fa-graduation-cap"></i>';
        roleAttribute = `School = ${employee.school}`;
      }
      return `<div id="employee-container">
        <h3>
          <span>${employee.getName()} <br> ${iEl} ${employee.getRole()}</span>
        </h3>
        <p>ID: ${employee.id} <br> Email: <a target="_blank" href="mailto:${employee.email}">${employee.email}</a> <br> ${roleAttribute}</p>
      </div>`;
    }).join('');
    return teamFolder;


}

const team = [new Manager(), new Engineer(), new Intern()];
const teamFolder = generateHTML(team);

const html = `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css" integrity="sha384-9S+up0gKPL+nGcJ6w/7Gx5Lu5UPv2oiIVNq/i/n9O6NrzU6OvA6ZLcA6y1xhWjRo" crossorigin="anonymous">
</head>
<body>
  <header>
    <h1>My Team</h1>
  </header>
  <div id="teamFolder">
    ${teamFolder}
    </div>
</body>
</html>`

fs.writeFile("..\\Team-Profile-Generator\\dist\\index.html", html, (err) =>
  err ? console.error(err) : console.log("HTML has been generated!")
);


module.exports = generateHTML;
