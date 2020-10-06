import { User } from "../../models/User";
import { IUSerDBHandler } from "./IUserDBHandler";
import {Sequelize} from 'sequelize-typescript';
import { PrimaryExpression } from "typescript";
import Users from "../../models/db/UserDBModel";
import Professions from "../../models/db/Profession";
import { isNullOrUndefined } from "util";



export class UserDBHandler implements IUSerDBHandler{

    constructor(public connection  : Sequelize){}
    public async insertUser(data : object) : Promise<void>{
        const response  = await this.connection.models.Users.create(data)
        console.log(response)
    }
    public async deletetUser(id: number): Promise<number> {
        const response  = await this.connection.models.Users.destroy({where : {PersonalID : id}})
        return response
    }
    public async updateUser(id: number, data: object): Promise<void> {
        const response = await this.connection.models.Users.update(data , {where : {PersonalID : id}})
        console.log(response)
    }
    public async getUser(id: number): Promise<Users> {
        const response  = await this.connection.models.Users.findOne({where : {PersonalID : id},raw: true});
        return response as Users;
    }
    public async getAllUser(): Promise<Users[]> {
        const response  = await this.connection.models.Users.findAll({raw: true});
        return response as Users[];
    }
    public async getAllUserByTask(task : any): Promise<Users[]> {
        const options = {
            raw : true,
            include:[{
                model:Users
            }],
            where : {Type : task}
        }
        const response  = await this.connection.models.Profession.findAll(options);
        return response as Users[];
    }
}