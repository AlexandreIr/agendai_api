import bcrypt from 'bcrypt';
import repositoryUsers from "../repositories/repository.users.js";
import jwt from '../token.js'

async function insert(id_user ,name , email, password) {
    const hashPassword =await bcrypt.hash(password, 10);
    const user = await repositoryUsers.insert(id_user ,name , email, hashPassword);

    user.token = jwt.Create(user.id_user);

    return user;
};

async function login(email, password) {
    const user = await repositoryUsers.findByEmail(email);
    if(user.length==0){
        return [];
    }else {
        if(await bcrypt.compare(password, user.password)) {
            delete user.password;

            user.token = jwt.Create(user.id_user);
            return user;
        } else {
            return [];
        }
    }
}

export default {insert, login};