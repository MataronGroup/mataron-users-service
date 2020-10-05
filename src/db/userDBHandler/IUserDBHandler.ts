import Users from '../../models/db/UserDBModel';
import {User} from '../../models/User'

export interface IUSerDBHandler{
    insertUser(data : User) : Promise<Users>;
    
    deletetUser(id : number) : Promise<Users>;

    updateUser(id : string , data : User) : Promise<Users>;
    
    getUser(id : number) : Promise<Users>;

    getAllUser() : Promise<Users[]>;

    getAllUserByTask(task : any) : Promise<Users[]>;
}