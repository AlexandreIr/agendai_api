import serviceUsers from "../services/service.users.js";

async function insert(req, res) {
    const { name , email, password } = req.body;

    const user = await serviceUsers.insert(name , email, password);
    res.json(user);
}

async function login(req, res) {
    const {email, password} = req.body;

    const login = await serviceUsers.login(email,password);
    if(login.length==0){
        res.status(401).json({error:'Erro, usuário ou senha errado'});
    } else {
        res.status(201).json(login);
    }
}

async function profile(req, res) {
    const id_user = req.id_user;
    const user = await serviceUsers.profile(id_user);
    res.json(user);
}
async function insertAdmin(req, res) {
    const {name, email, password} = req.body;
    const admin = await serviceUsers.insertAdmin(name, email, password);
    res.json(admin);
}

async function loginAdmin(req, res) {
    const {email, password} = req.body;

    const login = await serviceUsers.loginAdmin(email,password);
    if(login.length==0){
        res.status(401).json({error:'Erro, usuário ou senha errado'});
    } else {
        res.status(201).json(login);
    }
}

export default{insert, login, profile, insertAdmin, loginAdmin}