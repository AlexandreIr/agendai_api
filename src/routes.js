import { Router } from "express";

import contollerDoctors from "./controllers/contoller.doctors.js";

const router = Router();

router.get('/doctors', contollerDoctors.list);

export default router;