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

async function erase(id_doctor) {
        try{
            console.log(`Doutor ${id_doctor} excluído com sucesso`);
            return db`delete from doctors where id_doctor=${id_doctor}`;
        } catch(err){
            console.log(err.message);
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

async function listServices(id_doctor) {
    let services
    try{
        services = db`select d.id_service, s.description, d.price 
        from doctors_services d 
        join services s on (s.id_service = d.id_service)
        where d.id_doctor=${id_doctor}
        order by s.description`;
    } catch (err){
        console.log(err);
    }
    return services;
}


export default {list, insert, erase, edit, listServices};