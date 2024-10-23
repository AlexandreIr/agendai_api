import { Router } from "express";

import contollerDoctors from "./controllers/contoller.doctors.js";
import controllerUsers from './controllers/controller.users.js'

const router = Router();

//doctors
router.get('/doctors', contollerDoctors.list);
router.post('/doctors', contollerDoctors.insert);
router.delete('/doctors', contollerDoctors.erase);
router.put('/doctors', contollerDoctors.edit);

//users
router.post('/users/register', controllerUsers.insert);
router.post('/users/login', controllerUsers.login);


export default router;