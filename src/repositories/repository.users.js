import db from "../database/db.js";

async function insert(id_user ,name , email, password) {
    let user

    try {
        user = await db`
            INSERT INTO users (id_user ,name, email, password) VALUES (${id_user},${name}, ${email}, ${password})
        `;
    } catch (err) {
        console.error('Erro ao inserir no banco de dados:', err);
    }

    return user;
}

async function findByEmail(email) {
    try {
        const user = await db `select * from users where email = ${email}`;
        if(user.length>0){
            return user[0];
        } else {
            return [];
        }
    } catch (error) {
        console.log(error.message);
    }
}

async function login(email, password) {
    
}

export default {insert, login, findByEmail}