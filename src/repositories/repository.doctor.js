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


async function insert(name, specialty, icon) {
    let doctor

    try {
        doctor = await db`
            INSERT INTO doctors (name, specialty, icon) VALUES (${name}, ${specialty}, ${icon})
            returning id_doctor
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

async function listServices(name) {
    try{
        const doctor = list(name);
        const services = db`select * from doctors_services where id_doctor=doctors.${doctor.id_doctor}`;
        return services;
    } catch (err){
        console.log(err.message);
    }
}


export default {list, insert, erase, edit, listServices};