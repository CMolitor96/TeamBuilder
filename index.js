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

let employeeArray = [];
function manager() {
    // let manager = new Promise((resolve, reject) => {
    inquirer
        .prompt(managerQuestions).then((response) => {
            // console.log(response);
            // console.log(response.addEmployee);
            employeeArray.push(new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice));
            return repeat(response);
        }).then(() => {
            console.log('Enjoy your new team roster!');

            //This is where to put string literal for html template
            //bascically add html code and append to file for every individual employee you make
            // for initial manager write to file starting lines of html including head, and then manager card
            //then for every employee just the div bootstrap card with info filled in
            //then at very end append to file the closing tags for body script, and html
            // make function for write me for engineer and intern




        })
}

function engineer() {
    return inquirer
        .prompt(engineerQuestions).then((response) => {
            // console.log(response);
            // console.log(response.addEmployee);
            employeeArray.push(new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub));
            return repeat(response);
        });
}

function repeat(response) {
    if (response.addEmployee === 'Engineer') {
        return engineer();
    } else if (response.addEmployee === 'Intern') {
        return intern();
    } else {
        return;                
    }
}

function intern() {
    return inquirer
        .prompt(internQuestions).then((response) => {
            // console.log(response);
            // console.log(response.addEmployee);
            employeeArray.push(new Intern(response.internName, response.internId, response.internEmail, response.internSchool));
            return repeat(response);
        });
}


manager();
// console.log(employeeArray);
// engineer();




// fs.writeFile('/dist/index.html')