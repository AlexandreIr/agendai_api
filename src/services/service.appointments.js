import repositoryAppointments from "../repositories/repository.appointments.js";

async function listByUser(id_user) {
    return await repositoryAppointments.listByUser(id_user);
}

async function insert(id_user, id_doctor, id_service, booking_date, booking_hour) {
    return await repositoryAppointments.insert(id_user, id_doctor, id_service, booking_date, booking_hour);
}

export default {listByUser, insert};