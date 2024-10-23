import repositoryDoctor from "../repositories/repository.doctor.js";

async function list (name) {
    const doctors = await repositoryDoctor.list(name);
    return doctors;
};

async function insert(id_doctor,name, icon, speciality) {
    const doctor = await repositoryDoctor.insert(id_doctor,name, speciality, icon);

    return doctor;
};

async function erase(name) {
    return await repositoryDoctor.erase(name)
}

async function edit(id_doctor, name, speciality, icon) {
    return await repositoryDoctor.edit(id_doctor, name, speciality, icon);
}

export default {list, insert, erase, edit};