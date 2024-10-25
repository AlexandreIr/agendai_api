import repositoryServices from "../repositories/repository.services.js";

async function insert(description) {
    return await repositoryServices.insert(description);
}

export default {insert};