import repositoryDoctor from "../repositories/repository.doctor.js";

async function list (name) {
    const doctors = await repositoryDoctor.list(name);
    return doctors;
};

async function insert({id_doctor,name, icon, speciality}) {
    await repositoryDoctor.insert({id_doctor,name, icon, speciality});
};

export default {list, insert};