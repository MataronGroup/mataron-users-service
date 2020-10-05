import express, { response } from "express";
import { IUSerDBHandler } from "./db/userDBHandler/IUserDBHandler";
import {Router} from "./Controllers/Router";

export class UserController implements Router{
    
    public path = '/user';
    public router = express.Router();

    constructor(public userDBHandler : IUSerDBHandler) {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.post(this.path, this.insertUser.bind(this));

        this.router.get(this.path + "/:id", this.getUser.bind(this));
        this.router.get(`${this.path}s`, this.getAllUser.bind(this));
        this.router.get(this.path, this.getAllUserByTask.bind(this));

        this.router.delete(`${this.path}/:id`, this.deletetUser.bind(this));
        this.router.put(`${this.path}/:id`, this.updateUser.bind(this));
        this.router.post(`${this.path}`, this.insertUser.bind(this));

    }

    public async insertUser(req: express.Request, res: express.Response){
        
    }


    public async deletetUser(req: express.Request, res: express.Response){
        try{
            let id = parseInt(req.params.id)
            let user = await this.userDBHandler.deletetUser(id);
            res.status(200).send(user);
        }
        catch(err){
            res.status(500).send(err);
        }
    }


    public async updateUser(req: express.Request, res: express.Response){
        
    }

    
    public async getUser(req: express.Request, res: express.Response){
        try{
            console.log("here")
            let id = parseInt(req.params.id)
            let user = await this.userDBHandler.getUser(id);
            res.status(200).send(user);
        }
        catch(err){
            res.status(500).send(err);
        }
    }

    public async getAllUser(req: express.Request, res: express.Response){
        try{
            let users = await this.userDBHandler.getAllUser();
            let response = {
                users : users
            }
            res.status(200).send(response);
        }
        catch(err){
            res.status(500).send(err);
        }
    }

    public async getAllUserByTask(req: express.Request, res: express.Response){
        try{
            
            let taskParam = req.query.task;
            console.log(taskParam)
            let users = await this.userDBHandler.getAllUserByTask(taskParam);
            
            let response = {
                users : users
            }
            
            res.status(200).send(response);
            
        }
        catch(err){
            res.status(500).send(err);
        }
    }
}