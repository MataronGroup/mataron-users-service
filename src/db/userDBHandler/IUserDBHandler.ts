import Users from '../../models/db/UserDBModel';
import {User} from '../../models/User'

export interface IUSerDBHandler{
    insertUser(data : object) : Promise<void>;

    deletetUser(id : number) : Promise<number>;

    updateUser(id : number , data : object) : Promise<void>;

    getUser(id : number) : Promise<Users>;

    getAllUser() : Promise<Users[]>;

    getAllUserByTask(task : any) : Promise<Users[]>;
}