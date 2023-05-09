const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
const generateCSS = require("./src/generateCSS");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let team = [];

const init = (team) => {
  generateHTML(team);
  generateCSS();
}

  
const addTeam = () => {
    inquirer.prompt([
        {
          type: "list",
          name: "memberRole",
          message: "would you like to add another member to your team?",
          choices: ["Engineer", "Intern", "Finish Building Team"],
        }
      ]).then((answer) => {
        if (answer.memberRole === "Engineer") {
          inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "Enter the name of your Engineer",
          },

          {
            type: "input",
            name: "id",
            message: "Enter ID of the Engineer",
          },

          {
            type: "input",
            name: "email",
            message: "Enter the Engineers email",
          },

          {
            type: "input",
            name: "github",
            message: "Enter the Github username of your Engineer",
          },
        ]).then((answer) => {
          const engineer = new Engineer(
            answer.name,
            answer.id,
            answer.email,
            answer.github
          )
          team.push(engineer);
          addTeam();
        })
      } else if (answer.memberRole === "Intern"){
      inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "Enter the name of your Intern",

          },
          {
            type: "input",
            name: "id",
            message: "Enter the ID of your Intern",
          },

          {
            type: "input",
            name: "email",
            message: "Enter the email of your Intern",
          },
          {
            type: "input",
            name: "school",
            message: "Enter the name of the school for your Intern",
          },
        ]).then((answer) => {
          const intern = new Intern(
            answer.name,
            answer.id,
            answer.email,
            answer.school
          );
          team.push(intern)
          addTeam();
        })
      }else {
        init(team);
      }
    })
  }

    inquirer.prompt([
        {
          name: "name",
          type: "input",
          message: "what is manager's name?",
        },
  
        {
          name: "id",
          type: "number",
          message: "what is manager's ID number?",
        },
  
        {
          name: "email",
          type: "input",
          message: "what is manager's email?",
        },
  
        {
          name: "officeNumber",
          type: "input",
          message: "what is manager's office number?",
        },
      ]).then((answer) => {
        const manager = new Manager(
          answer.name,
          answer.id,
          answer.email,
          answer.officeNumber
        );
        team = [manager];
        addTeam();
      })