import repositoryDoctor from "../repositories/repository.doctor.js";

async function list (id_doctor) {
    const doctors = await repositoryDoctor.list(id_doctor);
    return doctors;
};

async function insert(name, icon, speciality) {
    const doctor = await repositoryDoctor.insert(name, speciality, icon);

    return doctor;
};

async function erase(id_doctor) {
    return await repositoryDoctor.erase(id_doctor)
}

async function edit(id_doctor, name, speciality, icon) {
    return await repositoryDoctor.edit(id_doctor, name, speciality, icon);
}

async function listServices(id_doctor) {
    return await repositoryDoctor.listServices(id_doctor)
}

export default {list, insert, erase, edit, listServices};