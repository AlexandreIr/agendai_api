import { Router } from "express";

import contollerDoctors from "./controllers/contoller.doctors.js";
import controllerUsers from './controllers/controller.users.js';
import jwt from './token.js';
import controllerServices from "./controllers/controller.services.js";
import controllerAppointments from "./controllers/controller.appointments.js";

const router = Router();

//doctors
router.get('/doctors', jwt.Validate,contollerDoctors.list);
router.post('/doctors', jwt.Validate,contollerDoctors.insert);
router.delete('/doctors',jwt.Validate,contollerDoctors.erase);
router.put('/doctors', jwt.Validate,contollerDoctors.edit);
router.get('/doctors/:id_doctor/services', jwt.Validate, contollerDoctors.listServices);

//users
router.post('/users/register', controllerUsers.insert);
router.post('/users/login', controllerUsers.login);
router.get('/users/profile', jwt.Validate, controllerUsers.profile);
router.post('/admin/login', controllerUsers.loginAdmin);
router.post('/admin/register', controllerUsers.insertAdmin);

//services
router.post('/services/create', jwt.Validate, controllerServices.insert);

//appointments
router.get('/appointments', jwt.Validate, controllerAppointments.listByUser);
router.get('/admin/appointments', jwt.Validate, controllerAppointments.listAll);
router.post('/appointments', jwt.Validate, controllerAppointments.insert);
router.delete('/appointments/:id_appointment', jwt.Validate, controllerAppointments.exclude);


export default router;