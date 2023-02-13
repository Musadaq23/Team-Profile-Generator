const inquirer = require("inquirer");
const fs = require("fs");
const renderpage = require("./dist/generateHTML.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = [];

function addManager () {
    console.log("build your team");
    inquirer.prompt([   
{
    name: "name",
    type: "input",
    message: "what is manager's name?",
    validate: (name) => {
        if (name) {
            return true;
        } else {
                return false;
            }
    },
},

{
    name: "id",
    type: "number",
    message: "what is manager's ID number?",
    validate: (id) => {
        if (id) {
            return true;
        } else {
                return false;
            }
    },
},

{
    name: "email",
    type: "input",
    message: "what is manager's email?",
    validate: (email) => {
        if (email) {
            return true;
        } else {
                return false;
            }
    },
},

{
    name: "officeNumber",
    type: "input",
    message: "what is manager's office number?",
},
])

.then((answers) => {
    const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
    );
    team.push(manager);
    addTeam();
})
};

function addTeam() {
    inquirer
    .prompt([ {
        type: 'list',
        name: 'memberRole',
        message: 'would you like to add another member to your team?',
        choices: ['Engineer', 'Intern', 'No thank you']
    }]).then(chosen => {
        switch (chosen.memberRole) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            case 'No thank you':
                buildTeam();
                break;
        }

    });
};

function addEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of your Engineer',
            validate: (name) => {
                if (name) {
                    return true;
                } else {
                        return false;
                    }
            },
        },

        {
            type: 'number',
            name: 'id',
            message: 'Enter ID of the Engineer',
            validate: (id) => {
                if (id) {
                    return true;
                } else {
                        return false;
                    }
            },
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter the Engineers email',
            validate: (email) => {
                if (email) {
                    return true;
                } else {
                        return false;
                    }
            },
        },

        {
            type: 'input',
            name: 'Github',
            message: 'Enter the Github username of your Engineer',
            validate: (Github) => {
                if (Github) {
                    return true;
                } else {
                        return false;
                    }
            },
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.Github);
        team.push(Engineer);
        addTeam();
    })
};

function addIntern() {
    inquirer
        .prompt([
            {
            type: 'input',
            name: 'Name',
            message: 'Enter the name of your Itern',
            },
            {
            type: 'number',
            name: 'id',
            message: 'Enter the ID of your Intern',
            },
            
            {
            type: 'input',
            name: 'email',
            message: 'Enter the email of your Intern',
            },
            {
            type: 'input',
            name: 'school',
            message: 'Enter the name of the school for your intern',
            }
        ]).then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(Intern);
            addTeam();
        })   
};

function buildTeam() {
    fs.writeFileSync('./dist/generateHTML.js',renderpage(team), 'UTF-8');
}

addManager();



