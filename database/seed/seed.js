const {faker} = require('@faker-js/faker');
const { addDepartment } = require('../../operations/departments');



async function seedDepartments(){

    for (let index = 0; index < 10; index++) {

        // gen fake dept name
        const name  = faker.commerce.department();

        await addDepartment(name);
        
        
    }


}

async function seed(){

    /// TODO: delete the dept table
    
    await seedDepartments()

}



seed();