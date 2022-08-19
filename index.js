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
        //Validates strings with spaces and letters only
        validate: function (managerName) {
  
            valid = /^[A-Za-z\s]*$/g.test(managerName)

            if (valid) {
                return true;
            } else {
                console.log(" \n Please enter a valid name")
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Employee ID: ',
        name: 'managerId',
        //Validates strings with numbers only
        validate: function (managerId) {
  
            valid = /^[0-9]+$/g.test(managerId)

            if (valid) {
                return true;
            } else {
                console.log(" \n Please enter a valid number")
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Email Address: ',
        name: 'managerEmail',
        //Validate function taken from https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
        validate: function (managerEmail) {
  
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmail)

            if (valid) {
                return true;
            } else {
                console.log("\n Please enter a valid email")
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Office Number: ',
        name: 'managerOffice',
        //Validates strings with numbers only
        validate: function (managerOffice) {
  
            valid = /^[0-9]+$/g.test(managerOffice)

            if (valid) {
                return true;
            } else {
                console.log(" \n Please enter a valid number")
                return false;
            }
        }
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
        //Validates strings with letters and spaces only
        validate: function (engineerName) {
  
            valid = /^[A-Za-z\s]*$/g.test(engineerName)

            if (valid) {
                return true;
            } else {
                console.log(" \n Please enter a valid name")
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Employee ID: ',
        name: 'engineerId',
        //Validates strings with only numbers
        validate: function (engineerId) {
  
            valid = /^[0-9]+$/g.test(engineerId)

            if (valid) {
                return true;
            } else {
                console.log(" \n Please enter a valid number")
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Email Address: ',
        name: 'engineerEmail',
        //Validate function taken from https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
        validate: function (engineerEmail) {
  
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(engineerEmail)

            if (valid) {
                return true;
            } else {
                console.log("\n Please enter a valid email")
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'GitHub Username: ',
        name: 'engineerGithub',
        //Validates strings with only letters and numbers, and no spaces
        validate: function (engineerGithub) {
  
            valid = /^[A-Za-z0-9]*$/g.test(engineerGithub)

            if (valid) {
                return true;
            } else {
                console.log(" \n Please enter a valid username")
                return false;
            }
        }
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
        //Validates strings with spaces and letters only
        validate: function (internName) {
  
            valid = /^[A-Za-z\s]*$/g.test(internName)

            if (valid) {
                return true;
            } else {
                console.log(" \n Please enter a valid name")
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Intern ID: ',
        name: 'internId',
        //Validates strings with numbers only
        validate: function (internId) {
  
            valid = /^[0-9]+$/g.test(internId)

            if (valid) {
                return true;
            } else {
                console.log(" \n Please enter a valid number")
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Email Address: ',
        name: 'internEmail',
        //Validate function taken from https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
        validate: function (internEmail) {
  
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(internEmail)

            if (valid) {
                return true;
            } else {
                console.log("\n Please enter a valid email")
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'School: ',
        name: 'internSchool',
        // Validates strings with letters and spaces only
        validate: function (internSchool) {
  
            valid = /^[A-Za-z\s]*$/g.test(internSchool)

            if (valid) {
                return true;
            } else {
                console.log(" \n Please enter a valid school name")
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'Add employee: ',
        choices: ['Engineer', 'Intern', 'I am finished building my team'],
        name: 'addEmployee'
    },
];

// employeeArray holds all new objects created by user input based off Employee class
let employeeArray = [];

// manager() starts off script with manager questions, then loops engineer and intern questions until user is done
// adding members and finishes the html file 
function manager() {
    inquirer
        .prompt(managerQuestions).then((response) => {
            employeeArray.push(new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice));
            fs.writeFile('index1.html', managerHTML(response), (err) => {
                if (err) {
                    console.log(err);
                }
            });
            return repeat(response);
        }).then(() => {
            console.log('\nEnjoy your new team roster!');
            fs.appendFile('index1.html', footerHTML(), (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
}

// managerHTML() generates initial html file and adds card based off of user input for manager
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

// engineer() function asks engineer questions, then adds html based off of user input
function engineer() {
    return inquirer
        .prompt(engineerQuestions).then((response) => {
            employeeArray.push(new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub));
            fs.appendFile('index1.html', engineerHTML(response), (err) => {
                if (err) {
                    console.log(err);
                }
            });
            return repeat(response);
        });
}

// engineerHTML() function appends html to original file based off of user input
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

// repeat() function repeats either the engineer or intern questions based off of response from adding team members
// if user selects finished with building team, the script will end
function repeat(response) {
    if (response.addEmployee === 'Engineer') {
        return engineer();
    } else if (response.addEmployee === 'Intern') {
        return intern();
    } else {
        return;                
    }
}

// intern() function goes through all the questions for adding an intern then appends a html file filled out with info
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
            });
            return repeat(response);
        });
}

// internHTML() function appends intern data to html file
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
    </div>`;
}

// footerHTML() function appends the final closing tags to the html file
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
</html>`;
}


// manager() starts entire script
manager();
