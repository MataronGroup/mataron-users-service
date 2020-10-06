import App from "./App";
import {Sequelize} from 'sequelize-typescript';
import Users from './models/db/UserDBModel'
import Professions from './models/db/Profession'
import { UserController } from "./UserController";
import { UserDBHandler } from "./db/userDBHandler/userDBHandler";
import {config} from './conf/config'

const seq = new Sequelize(config.db.database, config.db.username, config.db.password, {
    host: config.db.host,
    dialect: "mssql",
    models: [Users,Professions]
  });






const userHandler = new UserDBHandler(seq);



const app = new App(
    [
        new UserController(userHandler)
    ],
    config.server.port,
);

app.listen();