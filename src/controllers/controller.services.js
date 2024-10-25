import serviceServices from "../services/service.services.js";

async function insert(req, res) {
    const description = req.body.description;

    const service = await serviceServices.insert(description);
    res.json(service);
}

export default {insert}