import Users from '../../models/db/UserDBModel';
import {User} from '../../models/User'

export interface IUSerDBHandler{
    insertUser(data : object) : Promise<void>;

    deletetUser(id : string) : Promise<number>;

    updateUser(id : string , data : object) : Promise<any>;

    getUser(id : string) : Promise<Users>;

    getAllUser() : Promise<Users[]>;

    getAllUserByTask(task : any) : Promise<Users[]>;
}