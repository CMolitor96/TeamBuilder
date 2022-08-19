const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
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

// const addNewQuestion = [
//     {
//         type: 'list',
//         message: 'Add employee: ',
//         choices: ['Engineer', 'Intern', 'I am finished building my team'],
//         name: 'addEmployee'
//     },
// ]

function manager() {
    let manager = new Promise((resolve, reject) => {
        inquirer
        .prompt(managerQuestions).then((response) => {
            resolve(response);
        });
    })

    manager.then((response) => {
        console.log(response);
        console.log(response.addEmployee);
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
        console.log(manager);
    });
}

function engineer() {
    let engineer = new Promise((resolve, reject) => {
        inquirer
        .prompt(engineerQuestions).then((response) => {
            resolve(response);
        });
    });

    engineer.then((response) => {
        console.log(response);
        console.log(response.addEmployee);
    });
}

function intern() {
    let intern = new Promise((resolve, reject) => {
        inquirer
        .prompt(internQuestions).then((response) => {
            resolve(response);
        });
    });

    intern.then((response) => {
        console.log(response);
        console.log(response.addEmployee);
    });
}


manager();
// engineer();




// fs.writeFile('/dist/index.html')