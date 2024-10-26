import db from "../database/db.js";

async function insert(name , email, password) {
    let user

    try {
        user = await db`
            INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${password})
            returning id_user
        `;
    } catch (err) {
        console.error('Erro ao inserir no banco de dados:', err);
    }

    return user[0];
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

async function profile(id_user) {
    return await db `select name, email from users where id_user = ${id_user}`;
}


export default {insert, findByEmail, profile}