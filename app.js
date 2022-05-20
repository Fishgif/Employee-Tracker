const inquirer = require('inquirer');
const { getAllDepartments, addDepartment } = require('./operations/departments');
const { addRole } = require('./operations/roles');
const { getAllEmployees, addEmployee, updateRole} = require('./operations/employees')
const {getAllRoles} = require('./operations/roles');



// we want to keep asking the following question 
// until the user selected "exit"

function askQuestion(){

    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What do you want?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a Department",
                "Add a role",
                "Add an employee",
                "Update employee role",
                "Exit"
            ]
        }
    ]).then(async (ans) => {

        if(ans.choice !== "Exit"){

            if(ans.choice === 'View all departments'){
                // Prints Department Table
                const departments = await getAllDepartments();
                console.table(departments);
            }
            if(ans.choice === 'View all roles'){
                // Prints Department Table
                const getRoles = await getAllRoles();
                console.table(getRoles);
            }
            if(ans.choice === 'View all employees'){
               // Prints Department Table
                const getEmployees = await getAllEmployees();
                console.table(getEmployees);
            }
            if(ans.choice === 'Add a Department'){
            await askForNewDepartment();
            }
            if(ans.choice === 'Add a role'){
                await askForNewRole();
            }
            if(ans.choice === 'Add an employee'){
                await askForNewEmployee();
            }
            if(ans.choice === 'Update employee role'){
                await updateEmployeeRole();
            }
            
            return askQuestion()
        }
        process.exit();


    })
}
askQuestion();


// View all departments

// View all roles

// view all employees

// add department 


function askForNewDepartment(){

    return inquirer.prompt([
        {
            type: "input",
            name: "new_department_name",
            message: "What is the name of the New Department you wish to create?"
        },

    ]).then((answers) => {

        console.log(answers);
        return addDepartment(answers.new_department_name);

    })
}

// add a role

function askForNewRole(){

    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the role title"
        },
        {
            name: "salary",
            type: 'number',
            message: "What is the salary for this role"
        },
        {
            type: 'list',
            message: "What is the department id?",
            name: "department_id",
            choices: async function(previousAns){

                const departments = await getAllDepartments();

                // return an array of object
                // {name: 'dept name', value: 'dept_id'}
                return departments.map(function(department){
                    return {
                        name: department.name,
                        value: department.id,
                    }
                })


            }
        }

    ]).then((answers) => {

        console.log(answers);
        return addRole(answers.title, answers.salary, answers.department_id);

    })
}
// Add an employee
function askForNewEmployee(){

    return inquirer.prompt([
        {
            type: "input",
            name: "employee_first_name",
            message: "What is the FIRST name of the Employee?"
        },
        {
            name: "employee_last_name",
            type: "input",
            message: "What is the LAST name of the Employee?"
        },
        {
            name: "employee_role",
            type: "list",
            message: "What is the new employees ROLE?",
            choices: async function(previousAns){
                const getRoles = await getAllRoles();
                
                return getRoles.map(function(rolesAsPerList){

                    return{
                        name: rolesAsPerList.role,
                        value: rolesAsPerList.id,

                    }

                })
            }
        },
        {
            name: "employee_line_manager",
            type: 'list',
            message: "Who is the employees direct LINE MANAGER?",
            choices: async function(previousAns){

                const employeeList = await getAllEmployees();

                // return an array of object
                // {name: 'dept name', value: 'dept_id'}
                return employeeList.map(function(employeesAsPerList){
                    return {
                        name: employeesAsPerList.first_name + ' ' + employeesAsPerList.last_name,
                        value: employeesAsPerList.id,
                    }
                })


            }
        }
        
    ]).then((answers) => {

        console.log(answers);
        return addEmployee(
            answers.employee_first_name, 
            answers.employee_last_name, 
            answers.employee_role, 
            answers.employee_line_manager);

    })
}

// update employee role
function updateEmployeeRole(){

    return inquirer.prompt([
        {
            type: "list",
            name: "employee_select",
            message: "Which employees would you like to change?",
            choices: async function(previousEmployees){

                const employees = await getAllEmployees();

                // return an array of object
                
                return employees.map(function(employeeList){
                    return {
                        name: employeeList.first_name + ' ' + employeeList.last_name,
                        value: employeeList.id,
                    }
                })


            }
        },
        {
            name: "new_role_title",
            type: 'list',
            message: "What is this employees new title?",
            choices: async function(previousEmployees){

                const getRoles = await getAllRoles();
                
                return getRoles.map(function(rolesAsPerList){

                    return{
                        name: rolesAsPerList.role,
                        value: rolesAsPerList.id,

                    }

                })


            }
        },
        
    ]).then((answers) => {

        console.log(answers);
        return updateRole(answers.employee_select, answers.new_role_title);

    })
}








