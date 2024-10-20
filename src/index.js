import express from 'express';
import cors from 'cors';

import router from './routes.js';

const port = 3020;
const app = express();

app.use(cors());
app.use(router);


app.listen(port, ()=>{
    console.log(`Servidor rodando em ${port}`);
});