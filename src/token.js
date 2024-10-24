import jwt from 'jsonwebtoken';

const secret = "garpdroger";

function Create(id_user){
    const token = jwt.sign({id_user}, secret, {
        expiresIn: "24h"
    });

    return token;
}

function Validate(req, res, next){
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).json({error:'Não autorizado'});
    }

    const [bearer ,token ] = authToken.split(" ");

    jwt.verify(token, secret, (err, tokenDecoded)=>{
        if(err){
            return res.status(401).json({json:"Token inválido"});
        }
        req.id_user = tokenDecoded.id_user;

        next();
    });
}

export default {Create, Validate};