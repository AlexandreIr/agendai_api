import serviceDoctors from "../services/service.doctors.js";

async function list (req, res) {
    const name = req.query.name;
    const doctors = await serviceDoctors.list(name);

    res.json(doctors.map(doc=>{
        return {
            ...doc, name:`${doc.icon=='male'?'Dr.':'Dra.'} ${doc.name}`
        }
    }));
}

async function insert(req, res) {
    const {name, speciality, icon } = req.body;

    const doctor = await serviceDoctors.insert( name ,icon, speciality);
    res.json(doctor);
}

async function erase(req, res) {
    const {name} = req.query;

    return res.json(await serviceDoctors.erase(name));
};

async function edit(req, res) {
    const {id_doctor, name, speciality, icon} = req.body;

    return res.json(await serviceDoctors.edit(id_doctor, name, speciality, icon));
}

async function listServices(req, res) {
    const id_doctor = req.params.id_doctor;
    const services = await serviceDoctors.listServices(id_doctor);
    
    res.json(services);
}
export default {list, insert, erase, edit, listServices};