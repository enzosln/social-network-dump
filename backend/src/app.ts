import express, { Application, json} from 'express';
import dotenv from 'dotenv';

dotenv.config({path:'../.env'})

const app: Application = express();

// BODYPARSER FOR JSON
app.use(json());


app.listen(process.env.API_PORT || 3000, ()=> {
    console.log('Api en cours d\'execution sur le port ' + process.env.API_PORT || 3000);
})