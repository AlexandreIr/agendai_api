import db from '../database/db.js';

async function list (name) {
    let doctors;
    try {
        if(name){
            doctors = await db`select * from doctors where name like ${"%"+name+"%"} order by name`;
            if(doctors.length<1){
                doctors='Médico não encontrado'
            }
        }else {
            doctors = await db`select * from doctors order by name`
        }
        return doctors;
    } catch (error) {
        console.log(error)
    }
}


async function insert(id_doctor, name, specialty, icon) {
    const doctor = { id_doctor, name, specialty, icon };

    try {
        await db`
            INSERT INTO doctors (id_doctor, name, specialty, icon) VALUES (${id_doctor}, ${name}, ${specialty}, ${icon})
        `;
    } catch (err) {
        console.error('Erro ao inserir no banco de dados:', err);
    }

    return doctor;
}

async function erase(name) {
    const hasDoctor = list(name)
    if(hasDoctor){
        try{
            console.log(`Doutor ${name} excluído com sucesso`);
            return db`delete from doctors where name=${name}`;
        } catch(err){
            console.log(err.message);
        }
    }
}

async function edit(id_doctor, name, speciality, icon) {
    const hasDoctor = list(name);
    if(hasDoctor){
        try {
            return db`update doctors 
            set name=${name}, specialty=${speciality}, icon=${icon}
            where id_doctor = ${id_doctor}
            `
        } catch (error) {
            console.log(error.message);
        }
    }
}


export default {list, insert, erase, edit};