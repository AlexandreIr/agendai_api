import repositoryDoctor from "../repositories/repository.doctor.js";

async function list (name) {
    const doctors = await repositoryDoctor.list(name);
    return doctors;
};

async function insert(name, icon, speciality) {
    const doctor = await repositoryDoctor.insert(name, speciality, icon);

    return doctor;
};

async function erase(name) {
    return await repositoryDoctor.erase(name)
}

async function edit(id_doctor, name, speciality, icon) {
    return await repositoryDoctor.edit(id_doctor, name, speciality, icon);
}

async function listServices(id_doctor) {
    return await repositoryDoctor.listServices(id_doctor)
}

export default {list, insert, erase, edit, listServices};