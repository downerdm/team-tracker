const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
let employeeArray = [];

const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your employee ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is your office number?',
  },
  
]

const teamQuestions = [
    {
        type: 'list',
        message: 'What would you like to do next?',
        name: 'employee',
        choices: ['Add an engineer', 'Add an intern', 'Finish building my team'],
      },
    {
      type: 'input',
      name: 'name',
      message: "What is the employee's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the employee's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the employee's email address?",
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's github account name?",
    when: (input) => input.employee === 'Add an engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school name?",
      when: (input) => input.employee === 'Add an intern'
      },
      {
      type: 'confirm',
      name: 'addMore',
      message: "Would you like to add another employee?",
      default: false,
    }
]

function getManagerAnswers () {
    return inquirer.prompt(managerQuestions).then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        employeeArray.push(manager);
        console.log(manager);  
    } );;
}

getManagerAnswers().then (newEmployee)
    .then (teamArray => { return generateHtml (teamArray)})
    .then (HTML => { return writeHtml(HTML)})


function newEmployee() {
  return inquirer.prompt(teamQuestions).then(data => {
    if (data.employee == "Add an engineer") {
      const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
      employeeArray.push(newEngineer);
    } else {
      const newIntern = new Intern(data.name, data.id, data.email, data.school);
      employeeArray.push(newIntern);
    } if (data.addMore === true) {
      return newEmployee(employeeArray);
    } else {
      return employeeArray;
    }
  }
  )}

generateHtml = (teamArray) => {
    const cardArray = [];
    for (let i = 0; i < teamArray.length; i++) {
     if (teamArray[i].getRole() === "Manager") {
        cardArray.push(managerCard(teamArray[i]))
     } else if (teamArray[i].getRole() === "Engineer") {
      cardArray.push(engineerCard(teamArray[i]))
     } else {
      cardArray.push(internCard(teamArray[i]))
     }
    }
    
     cardStr = cardArray.join ('');
     return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="./src/style.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <div class="jumbotron text-center jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Team Members</h1>
        </div>
    </div>
    <div class="row">
     ${cardStr}
     </div>
</body>
</html>
`;
    

  }

  function writeHtml (HTML) {
    const filename = "index.html";
    fs.writeFile(filename, HTML, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  }

  function managerCard (manager) {
    return `
    <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${manager.name}</h5>
              <h5 class="card-title">${manager.getRole()} <i class="fa fa-coffee" style="font-size:24px"></i></h5>
              <h6 class="card-title">ID: ${manager.id}</h6>
              <h6 class="card-title">Email: <a href="mailto:${manager.email}">${manager.email}</a></h6>
              <h6 class="card-title">Office Number: ${manager.officeNumber}</h6>
             </div>
          </div>
        </div>
    `
  }

  function engineerCard (engineer) {
    return `
    <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${engineer.name}</h5>
              <h5 class="card-title">${engineer.getRole()} <i class="fa fa-wrench" style="font-size:24px"></i></h5>
              <h6 class="card-title">ID: ${engineer.id}</h6>
              <h6 class="card-title">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></h6>
              <h6 class="card-title">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></h6>
             </div>
          </div>
        </div>
    `
  }

  function internCard (intern) {
    return `
    <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${intern.name}</h5>
              <h5 class="card-title">${intern.getRole()} <i class="fa fa-graduation-cap" aria-hidden="true"></i></h5>
              <h6 class="card-title">ID: ${intern.id}</h6>
              <h6 class="card-title">Email: <a href="mailto:${intern.email}">${intern.email}</a></h6>
              <h6 class="card-title">School: ${intern.school}</h6>
             </div>
          </div>
        </div>
    `
  }

