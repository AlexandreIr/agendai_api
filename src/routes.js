import { Router } from "express";

import contollerDoctors from "./controllers/contoller.doctors.js";

const router = Router();

router.get('/doctors', contollerDoctors.list);
router.post('/doctors', contollerDoctors.insert);


export default router;