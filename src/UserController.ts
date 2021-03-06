import express, { response } from "express";
import { IUSerDBHandler } from "./db/userDBHandler/IUserDBHandler";
import { Router } from "./Controllers/Router";
import { isNullOrUndefined } from "util";

import userSchema from './schema/userSchema'
import userArraySchema from './schema/userArraySchema'
import { validate } from "express-jsonschema";
import { nextTick } from "process";


export class UserController implements Router {

    public path = '/user';
    public router = express.Router();
    public schemas: object;
    public usersArraySchema: object;

    constructor(public userDBHandler: IUSerDBHandler) {
        this.schemas = (userSchema)
        this.usersArraySchema = (userArraySchema)
        this.initializeRoutes();
    }

    public initializeRoutes() {

        this.router.get(this.path + "/:id", this.getUser.bind(this));
        this.router.get(`${this.path}s`, this.getAllUser.bind(this));
        this.router.get(this.path, this.getAllUserByTask.bind(this));

        this.router.delete(`${this.path}/:id`, this.deletetUser.bind(this));
        this.router.put(`${this.path}/:id`, validate({ body: this.schemas }), this.updateUser.bind(this));

        this.router.post(`${this.path}`, validate({ body: this.schemas }), this.insertUser.bind(this));
        // this.router.post(`${this.path}/createUsers`, validate({body: this.usersArraySchema}),this.postArrayOfUsers.bind(this));
        this.router.post(`${this.path}/createUsers`, this.postArrayOfUsers.bind(this));
    }


    public async insertUser(req: express.Request, res: express.Response) {

        try {
            const body = req.body;
            const id = body.PersonalID;
            const user = await this.userDBHandler.getUser(id)
            if (!isNullOrUndefined(user)) {
                res.status(409).send({ "error": `The user with id already exit in db ${id}` });
            }
            else {
                await this.userDBHandler.insertUser(body)
                res.status(200).send(await this.userDBHandler.getUser(id));
            }
        }
        catch (err) {
            res.status(500).send(err);
        }
    }


    public async deletetUser(req: express.Request, res: express.Response) {
        try {
            const id = req.params.id

            const user = await this.userDBHandler.getUser(id as string);
            const deletedCount = await this.userDBHandler.deletetUser(id as string);
            if (deletedCount == 0) {
                res.status(404).send({ "error": "not found id " + id })
            }
            res.status(200).send(user);
        }
        catch (err) {
            res.status(500).send(err);
        }
    }


    public async updateUser(req: express.Request, res: express.Response) {

        try {
            const body = req.body;
            const id = req.params.id;
            const user = await this.userDBHandler.updateUser(id as string, body);

            if (isNullOrUndefined(user)) {
                res.status(404).send({ "error": `The user with id not exit in db ${id}` });
            }
            else {
                res.status(200).send({ status: "success" });
            }
        }
        catch (err) {
            res.status(500).send({ "error": err.message });
        }
    }


    public async getUser(req: express.Request, res: express.Response) {
        try {
            const id = req.params.id

            const user = await this.userDBHandler.getUser(id as string);
            if (isNullOrUndefined(user)) {
                res.status(404).send({ "error": `User not found with id ${id}` });
            }
            res.status(200).send(user);
        }
        catch (err) {
            res.status(500).send(err);
        }
    }

    public async getAllUser(req: express.Request, res: express.Response) {
        try {
            const users = await this.userDBHandler.getAllUser();
            const response = {
                users
            }
            res.status(200).send(response);
        }
        catch (err) {
            res.status(500).send(err);
        }
    }

    public async getAllUserByTask(req: express.Request, res: express.Response) {
        try {

            const taskParam = req.query.task;
            const users = await this.userDBHandler.getAllUserByTask(taskParam);

            const response = {
                users
            }

            res.status(200).send(response);

        }
        catch (err) {
            res.status(500).send(err);
        }
    }

    public async postArrayOfUsers(req: express.Request, res: express.Response) {
        let errors = [];
        let success = [];
        const body = req.body;
        for (let i = 0; i < body.length; i++) {
            let user={} as any;
            try {
                const id = body[i].PersonalID;
                user = await this.userDBHandler.getUser(id);
                if (!isNullOrUndefined(user)) {
                    errors.push({"name":user.Name,"status":"failed","message":"already exist"});
                }
                else {
                    await this.userDBHandler.insertUser(body[i])
                    success.push({"name":body[i].Name,"status":"success"});
                }
            }
            catch (err) {
                errors.push({"name":user.Name,"status":"failed","message":"server error"});
            }
        }
        let response =  {
            errors : errors,
            success : success
        }
        res.status(200).send(response);
    }
}