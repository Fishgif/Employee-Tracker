const inquirer = require('inquirer');
const { getAllDepartments } = require('./operations/departments');

// we want to keep asking the foloowing question 
// until the user selected "exit"


function askQuestion(){

    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "WHat do you want?",
            choices: [
                "View all departments",
                "View all roles",
                "Exit"
            ]
        }
    ]).then(async (ans) => {

        if(ans.choice !== "Exit"){

            if(ans.choice === 'View all departments'){
                // TODO: print the dept in a table
                const departments = await getAllDepartments();
                console.table(departments);
            }


            return askQuestion()
        }


    })
}
askQuestion();


// View all departments

// View all roles

// view all employees

// add department 

// add a role

// Add an employee

// update employee role

// Eit app







