import db from "../database/db.js";

async function insert(description) {
    let service;
    try{
        service = await db 
        `INSERT INTO services (description) VALUES (${description})
            returning id_service
        `
    } catch (err){
        console.log(err.message);
    }
    return service[0];
}

export default {insert};