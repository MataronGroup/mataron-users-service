import { User } from "../../models/User";
import { IUSerDBHandler } from "./IUserDBHandler";
import {Sequelize} from 'sequelize-typescript';
import { PrimaryExpression } from "typescript";
import Users from "../../models/db/UserDBModel";
import Professions from "../../models/db/Profession";
 


export class UserDBHandler implements IUSerDBHandler{
    
    constructor(public connection  : Sequelize){}    
    public async insertUser(data: User) : Promise<Users>{
        throw new Error("Method not implemented.");
    }
    public async deletetUser(id: number): Promise<Users> {
        throw new Error("Method not implemented.");
    }
    public async updateUser(id: string, data: Users): Promise<Users> {
        throw new Error("Method not implemented.");
    }
    public async getUser(id: number): Promise<Users> {
        let response  = await this.connection.models["Users"].findOne({where : {UserId : id},raw: true});
        
        return response as Users;
    }
    public async getAllUser(): Promise<Users[]> {
        let response  = await this.connection.models["Users"].findAll({raw: true});
        return response as Users[];
    }
    public async getAllUserByTask(task : any): Promise<Users[]> {
        let options = {
            raw : true,
            include:[{
                model:Users
            }],
            where : {Type : task}
        }
        let response  = await this.connection.models["Profession"].findAll(options);
        console.log(response)
        return response as Users[];
    }
}