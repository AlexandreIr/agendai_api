import { Router } from "express";

import contollerDoctors from "./controllers/contoller.doctors.js";

const router = Router();

router.get('/doctors', contollerDoctors.list);
router.post('/doctors', contollerDoctors.insert);
router.delete('/doctors', (req, res)=>{
    const {name} = req.params;
    console.log(name)
});


export default router;