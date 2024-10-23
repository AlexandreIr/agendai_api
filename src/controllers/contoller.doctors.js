import serviceDoctors from "../services/service.doctors.js";

async function list (req, res) {
    const name = req.query.name;
    const doctors = await serviceDoctors.list(name);

    res.json(doctors);
}

async function insert(req, res) {
    const {id_doctor ,name, speciality, icon } = req.body;

    const doctor = await serviceDoctors.insert(id_doctor, name ,icon, speciality);
    res.json(doctor);
}

async function erase(req, res) {
    const {name} = req.query.name;

    return res.json(await serviceDoctors.erase(name));
}

export default {list, insert, erase};