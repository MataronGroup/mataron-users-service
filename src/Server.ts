import App from "./App";
import {Sequelize} from 'sequelize-typescript';
import Users from './models/db/UserDBModel'
import Professions from './models/db/Profession'
import { UserController } from "./UserController";
import { UserDBHandler } from "./db/userDBHandler/userDBHandler";


const seq = new Sequelize('mataron', 'mataron', 'thelittlecitizen', {
    host: '10.1.0.117',
    dialect: 'mssql',
    models: [Users,Professions]
  });






const userHandler = new UserDBHandler(seq);



const app = new App(
    [
        new UserController(userHandler)
    ],
    9000,
);

app.listen();