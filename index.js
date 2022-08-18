const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const managerQuestions = [
    {
        type: 'input',
        message: 'Team Manager Name: ',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'Employee ID: ',
        name: 'managerId',
    },
    {
        type: 'input',
        message: 'Email Address: ',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'Office Number: ',
        name: 'managerOffice',
    },
    {
        type: 'list',
        message: 'Add employee: ',
        choices: ['Engineer', 'Intern', 'I am finished building my team'],
        name: 'addEmployee'
    },
];

const engineerQuestions = [
    {
        type: 'input',
        message: 'Engineer Name: ',
        name: 'engineerName',
    },
    {
        type: 'input',
        message: 'Employee ID: ',
        name: 'engineerId',
    },
    {
        type: 'input',
        message: 'Email Address: ',
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: 'GitHub Username: ',
        name: 'engineerGithub',
    },
    {
        type: 'list',
        message: 'Add employee: ',
        choices: ['Engineer', 'Intern', 'I am finished building my team'],
        name: 'addEmployee'
    },
];

const internQuestions = [
    {
        type: 'input',
        message: 'Intern Name: ',
        name: 'internName',
    },
    {
        type: 'input',
        message: 'Intern ID: ',
        name: 'internId',
    },
    {
        type: 'input',
        message: 'Email Address: ',
        name: 'internEmail',
    },
    {
        type: 'input',
        message: 'School: ',
        name: 'internSchool',
    },
    {
        type: 'list',
        message: 'Add employee: ',
        choices: ['Engineer', 'Intern', 'I am finished building my team'],
        name: 'addEmployee'
    },
];

// function initialQuestions() {
//     inquirer
//     .prompt(managerQuestions).then((response) => {
//         console.log(response);
//         console.log(response.addEmployee);
//     });
// }

let testInitialPromise = new Promise((resolve, reject) => {
    inquirer
    .prompt(managerQuestions).then((response) => {
        resolve(response);
    });
})

testInitialPromise.then((response) => {
    console.log(response);
    console.log(response.addEmployee);
});

// function engineer() {
//     inquirer
//     .prompt(engineerQuestions).then((response) => {
//         console.log(response);
//         console.log(`Engineer Add Employee: ${response.addEmployee}`);
//     });
// }

// function intern() {
//     inquirer
//     .prompt(internQuestions).then((response) => {
//         console.log(response);
//         console.log(`Intern Add Employee: ${response.addEmployee}`);
//     });
// }

// function start() {
//     initialQuestions();
//     while (response.addEmployee != 'I am finished building my team') {
//         if (response.addEmployee === 'Engineer') {
//             engineer();
//         } else {
//             intern();
//         }
//     }
//     console.log('Finished adding members');
// }

// start();




// fs.writeFile('/dist/index.html')