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

export default {list, insert, erase};