import { Router } from "express";

import contollerDoctors from "./controllers/contoller.doctors.js";

const router = Router();

router.get('/doctors', contollerDoctors.list);
router.post('/doctors', contollerDoctors.insert);
router.delete('/doctors', contollerDoctors.erase);
router.put('/doctors', contollerDoctors.edit);


export default router;