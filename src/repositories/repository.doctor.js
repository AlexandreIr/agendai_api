import db from '../database/db.js';

async function list (name) {
    let doctors;
    if(name){
        doctors = await db`select * from doctors where name like '%${name}%' order by name`;
    }else {
        doctors = await db`select * from doctors order by name`
    }
    return doctors;
}


async function insert({id_doctor,name, icon, speciality}) {
    const doctor = {id_doctor,name, icon, speciality};
    await db`insert into doctors ${ db(doctor)}`;
}

export default {list, insert}