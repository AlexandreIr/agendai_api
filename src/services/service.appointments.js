import repositoryAppointments from "../repositories/repository.appointments.js";

async function listByUser(id_user) {
    return await repositoryAppointments.listByUser(id_user);
}

async function insert(id_user, id_doctor, id_service, booking_date, booking_hour) {
    return await repositoryAppointments.insert(id_user, id_doctor, id_service, booking_date, booking_hour);
}

async function exclude(id_user, id_appointment) {
    return await repositoryAppointments.exclude(id_user, id_appointment);
}

async function excludeAdmin(id_appointment) {
    return await repositoryAppointments.excludeAdmin(id_appointment);
}

async function listAll(at_start, at_end, id_doctor) {
    return await repositoryAppointments.listAll(at_start, at_end, id_doctor);
}
export default {listByUser, insert, exclude, listAll, excludeAdmin};