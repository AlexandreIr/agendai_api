import { Router } from "express";

import contollerDoctors from "./controllers/contoller.doctors.js";
import controllerUsers from './controllers/controller.users.js';
import jwt from './token.js';

const router = Router();

//doctors
router.get('/doctors', jwt.Validate,contollerDoctors.list);
router.post('/doctors', jwt.Validate,contollerDoctors.insert);
router.delete('/doctors',jwt.Validate,contollerDoctors.erase);
router.put('/doctors', jwt.Validate,contollerDoctors.edit);

//users
router.post('/users/register', controllerUsers.insert);
router.post('/users/login', controllerUsers.login);


export default router;