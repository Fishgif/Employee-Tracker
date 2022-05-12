const { connect } = require("../database/connect")



async function getAllDepartments(){

    const connection = await connect();

    const result = await connection.execute(`select * from departments`);
    //console.log(result)

    return result[0]


}

async function addDepartment(name){
    const connection = await connect();

    const query = `INSERT INTO \`departments\` (\`name\`) VALUES (?);`

    const result = await connection.execute(query, [name]);

    return result;

}


module.exports = {
    getAllDepartments,
    addDepartment
}