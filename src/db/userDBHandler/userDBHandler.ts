import { IUSerDBHandler } from "./IUserDBHandler";
import {Sequelize} from 'sequelize-typescript';
import Users from "../../models/db/UserDBModel";
import { isNullOrUndefined } from "util";


export class UserDBHandler implements IUSerDBHandler{

    constructor(public connection  : Sequelize){}
    public async insertUser(data : object) : Promise<void>{
        const response  = await this.connection.models.Users.create(data)
    }
    public async deletetUser(id: string): Promise<number> {
        const response  = await this.connection.models.Users.destroy({where : {PersonalID : id}})
        return response
    }
    public async updateUser(id: string, data: object): Promise<any> {
        const response = await this.connection.models.Users.findOne({where : {PersonalID : id}}).
        then(async r => {
            if (r) {
                await r.update(data , {where : {PersonalID : id}})
                return r;
            }

            return null
        }).catch(err => {
            throw err
        });

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

        const response = await this.connection.models.Profession.findAll(options)
        const r = JSON.parse(JSON.stringify(response))
        if (isNullOrUndefined(r[0])){
            return []
        }
        return (r[0].Users)
    }

    public async makeQuery(query : string) : Promise<any>{
        return await this.connection.query(query,{nest : true});

    }
}