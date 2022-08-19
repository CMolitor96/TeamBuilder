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
            fs.writeFile('index1.html', managerHTML(response), (err) => {
                if (err) {
                    console.log(err);
                }
            });
            return repeat(response);
        }).then(() => {
            fs.appendFile('index1.html', footerHTML(), (err) => {
                if (err) {
                    console.log(err);
                }
            });
            console.log('Enjoy your new team roster!');

            //This is where to put string literal for html template
            //bascically add html code and append to file for every individual employee you make
            // for initial manager write to file starting lines of html including head, and then manager card
            //then for every employee just the div bootstrap card with info filled in
            //then at very end append to file the closing tags for body script, and html
            // make function for write me for engineer and intern




        })
}

function managerHTML({managerName, managerId, managerEmail, managerOffice},) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
        crossorigin="anonymous">
        <style>
        
        body {
            background-color: #d1932e;
        }
        
        header {
            text-align: center;
            font-size: 34px;
            border: 2px solid teal;
            background-color: teal;
            box-shadow: 5px 10px 50px red;
        }
        
        footer {
            text-align: center;
            font-size: 34px;
            border: 2px solid teal;
            background-color: teal;
            box-shadow: 5px 10px 50px red;
        }
        
        #hoverZoom:hover {
            transform: scale(1.05);
        }
        </style>
        <title>Team</title>
    </head>
    <body>
        <div class="container-fluid">
            <header class="row justify-content-center" style="font-size: 3rem;">Team
    
            </header><br><br>
    
            <div class="row justify-content-center">
                <div class="col-6">
                    <section class="text-center" style="font-size: 2rem; margin: 10px;">Manager
                        <div class="card text-center" style="background-color: teal; box-shadow: 5px 10px; margin: 10px;" id="hoverZoom">
                            <div class="card-body">
                            <h3 class="card-title">${managerName}</h3>
                            <p class="card-text" style="font-size: 20px;">Id: ${managerId}</p>
                            <p class="card-text" style="font-size: 20px;">Office Number: ${managerOffice}</p>
                            <a href="mailto:${managerEmail}" class="btn btn-primary">${managerEmail}</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    
    
            <div class="row justify-content-center">`;
}

function engineer() {
    return inquirer
        .prompt(engineerQuestions).then((response) => {
            // console.log(response);
            // console.log(response.addEmployee);
            employeeArray.push(new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub));
            fs.appendFile('index1.html', engineerHTML(response), (err) => {
                if (err) {
                    console.log(err);
                }
            })
            return repeat(response);
        });
}

function engineerHTML({engineerName, engineerId, engineerEmail, engineerGithub}) {
    return `           
    <div class="col">
        <section class="text-center" style="font-size: 1.5rem; margin: 10px;">Engineer
            <div class="card text-center" style="background-color: teal; box-shadow: 5px 5px; margin: 10px;" id="hoverZoom">
                <div class="card-body">
                <h3 class="card-title">${engineerName}</h3>
                <p class="card-text">Id: ${engineerId}</p>
                <a href="mailto:${engineerEmail}" class="btn btn-primary" style="margin: 7px;">${engineerEmail}</a><br>
                <a href="https://github.com/${engineerGithub}" target="_blank" class="btn btn-primary">GitHub: ${engineerGithub}</a>
                </div>
            </div>
        </section>
    </div>`;
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
            fs.appendFile('index1.html', internHTML(response), (err) => {
                if (err) {
                    console.log(err);
                }
            })
            return repeat(response);
        });
}

function internHTML({internName, internId, internEmail, internSchool}) {
    return `            
    <div class="col">
        <section class="text-center" style="font-size: 1.5rem; margin: 10px;">Intern 
            <div class="card text-center" style="background-color: teal; box-shadow: 5px 5px; margin: 10px;" id="hoverZoom">
                <div class="card-body">
                <h3 class="card-title">${internName}</h3>
                <p class="card-text">Id: ${internId}</p>
                <p class="card-text">School: ${internSchool}</p>
                <a href="mailto:${internEmail}" class="btn btn-primary">${internEmail}</a>
                </div>
            </div>
        </section>
    </div>`
}

function footerHTML() {
    return `        
    </div>

    <br><br>
    <footer class="row justify-content-center" style="font-size: 3rem;">
      Made with ❤️
    </footer>


 </div>


</body>
<script src="../index.js"></script>
</html>`
}


manager();
// console.log(employeeArray);
// engineer();




// fs.writeFile('/dist/index.html')