import db from "../database/db.js";

async function listByUser(id_user) {
    try {
        const appoitnments = db `select a.id_appointment, s.description as service, 
            d.name as doctor, d.specialty, a.booking_date, a.booking_hour, u.name as user
            from appointments a 
            join services s on (s.id_service = a.id_service)
            join doctors d on (d.id_doctor = a.id_doctor)
            join users u on (u.id_user = a.id_user)
            join doctors_services ds on (ds.id_doctor = a.id_doctor and ds.id_service = a.id_service)
            where a.id_user = ${id_user}
            order by a.booking_date, a.booking_hour`;
            return appoitnments;
    } catch (error) {
        console.log(error.message);
    }
}

async function insert(id_user, id_doctor, id_service, booking_date, booking_hour) {
    try {
        const appoitnment = db `insert into appointments
        (id_user, id_doctor, id_service, booking_date, booking_hour)
        values
        (${id_user}, ${id_doctor}, ${id_service}, ${booking_date}, ${booking_hour})
        returning id_appointment`;
        return appoitnment;
    } catch (error) {
        console.log(error.message);
    }
}


export default {listByUser, insert};