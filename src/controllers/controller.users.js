import serviceUsers from "../services/service.users.js";

async function insert(req, res) {
    const { id_user ,name , email, password } = req.body;

    const user = await serviceUsers.insert(id_user ,name , email, password);
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

export default{insert, login}