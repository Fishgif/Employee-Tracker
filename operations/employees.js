const {connect} = require("../database/connect");


async function getAllEmployees() {

    const connection = await connect()
    


    const result = await connection.execute('select * from employees');
    return result[0]
}

async function addEmployee(employee_first_name, employee_last_name, employee_role, employee_line_manager){
    const connection = await connect();

    const query = `INSERT INTO \`employees\` (\`first_name\`, \`last_name\`, \`role_id\`, \`manager_id\`) VALUES (?, ?, ?, ?);`

    const result = await connection.execute(query, [employee_first_name, employee_last_name, employee_role, employee_line_manager ]);

    return result;

}


async function updateRole(employee_select, new_role_id){

    const connection = await connect();

    const query = `UPDATE \`employees\` SET \`role_id\` = ? WHERE (\`id\` = ?);`
    const result = await connection.execute(query, [new_role_id, employee_select]);

    return result;
}


module.exports = {

    getAllEmployees,
    addEmployee,
    updateRole
}