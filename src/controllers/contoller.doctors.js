import serviceDoctors from "../services/service.doctors.js";

async function list (req, res) {
    const name = req.query.name;
    const doctors = await serviceDoctors.list(name);

    res.json(doctors);
}

async function insert(req, res) {
    const {id_doctor, name, icon, specialty} = req.body;
    await serviceDoctors.insert({id_doctor, name, icon, specialty});
    res.json("Médico inserido com sucesso");
}

export default {list, insert};