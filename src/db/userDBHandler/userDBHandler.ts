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
    public async deletetUser(id: string): Promise<number> {
        const response  = await this.connection.models.Users.destroy({where : {PersonalID : id}})
        return response
    }
    public async updateUser(id: string, data: object): Promise<any> {
        let response = await this.connection.models.Users.findOne({where : {PersonalID : id}}).
        then(async r => {
            if (r) {
                await r.update(data , {where : {PersonalID : id}})
                console.log(r)
                return r;
            }

            return null
        }).catch(err => {
            throw err
        });
        // console.log(response)
        return response;
    }
    public async getUser(id: string): Promise<Users> {

        const response  = await this.connection.models.Users.findOne({where : {PersonalID : id},raw: true});
        return response as Users;
    }
    public async getAllUser(): Promise<Users[]> {
        const response  = await this.connection.models.Users.findAll({raw: true});
        return response as Users[];
    }
    public async getAllUserByTask(task : any): Promise<Users[]> {
        const options = {
            nest : true,
            include:[{
                model:Users,
                required: true
            }],
            where : {Type : task}
        }

        let response = await this.connection.models.Profession.findAll(options)
        let r = JSON.parse(JSON.stringify(response))
        if (isNullOrUndefined(r[0])){
            return []
        }
        console.log(r[0])

        return (r[0]["Users"])
    }
}