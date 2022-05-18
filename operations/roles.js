const { connect } = require("../database/connect")



async function getAllRoles(){

    const connection = await connect();

    const result = await connection.execute(`SELECT A.id, \`title\` as \`role\`, \`salary\`, \`name\` as \`department Name\`  FROM roles A
    JOIN departments 
    on departments.id = A.department_id;`);
    //console.log(result)

    return result[0]


}

async function addRole(title, salary, departmentId){
    const connection = await connect();

    const query = `INSERT INTO \`roles\` (\`title\`, \`salary\`, \`department_id\`) VALUES (?, ?, ?);`

    const result = await connection.execute(query, [title, salary, departmentId]);

    return result;

}


module.exports = {
    getAllRoles,
    addRole
}