import serviceAppointments from "../services/service.appointments.js";

async function listByUser(req, res) {
    const id_user = req.id_user;
    const appointments = await serviceAppointments.listByUser(id_user);
    res.json(appointments);
}


async function insert(req, res) {
    const id_user = req.id_user;
    const {id_doctor, id_service, booking_date, booking_hour} = req.body;
    const appointment = await serviceAppointments.insert(id_user, id_doctor, id_service, booking_date, booking_hour);
    res.json(appointment);
}

async function exclude(req, res) {
    const id_user = req.id_user;
    const {id_appointment} = req.params;
    const appointment = await serviceAppointments.exclude(id_user,id_appointment);
    res.json(appointment);
}

async function excludeAdmin(req, res) {
    const {id_appointment} = req.params;
    const appointment = await serviceAppointments.excludeAdmin(id_appointment);
    res.json(appointment);
}

async function listAll(req, res) {
    const {at_start, at_end, id_doctor} = req.query;
    const appointments = await serviceAppointments.listAll(at_start, at_end, id_doctor);
    res.json(appointments);
}

export default {listByUser, insert, exclude, listAll, excludeAdmin}