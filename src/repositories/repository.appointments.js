import db from "../database/db.js";

async function listByUser(id_user) {    
    try {
        const appointments = await db`
            SELECT a.id_appointment, s.description as service, 
                   d.name as doctor, d.specialty, a.booking_date, 
                   a.booking_hour, u.name as user
            FROM appointments a
            LEFT JOIN services s ON s.id_service = a.id_service
            LEFT JOIN doctors d ON d.id_doctor = a.id_doctor
            LEFT JOIN users u ON u.id_user = a.id_user
            LEFT JOIN doctors_services ds ON ds.id_doctor = a.id_doctor AND ds.id_service = a.id_service
            WHERE a.id_user = ${id_user}
            ORDER BY a.booking_date, a.booking_hour
        `;
        return appointments;
    } catch (error) {
        console.log(error.message);
    }
}



async function insert(id_user, id_doctor, id_service, booking_date, booking_hour) {
    let appointment
    try {
        appointment = await db `insert into appointments
        (id_user, id_doctor, id_service, booking_date, booking_hour)
        values
        (${id_user}, ${id_doctor}, ${id_service}, ${booking_date}, ${booking_hour})
        returning id_appointment`;
    } catch (error) {
        console.log(error);
    }
    return appointment;
}

async function exclude(id_user, id_appointment) {
    let appointment
    try {
        appointment = await db `delete from appointments
        where id_user = ${id_user} and id_appointment = ${id_appointment}`;
    } catch (error) {
        console.log(error);
    }
    return {id_appointment};
}


async function listAll(id_admin) {
    try {
        const appointments = await db `
            SELECT a.id_appointment, s.description as service, 
            d.name as doctor, d.specialty, a.booking_date, ds.price,
            a.booking_hour, u.name as user
            FROM appointments a
            LEFT JOIN services s ON s.id_service = a.id_service
            LEFT JOIN doctors d ON d.id_doctor = a.id_doctor
            LEFT JOIN users u ON u.id_user = a.id_user
            LEFT JOIN doctors_services ds ON ds.id_doctor = a.id_doctor AND ds.id_service = a.id_service
            ORDER BY a.booking_date, a.booking_hour
        `;
        return appointments;
    } catch (error) {
        console.log(error.message);
    }
}

export default {listByUser, insert, exclude, listAll};