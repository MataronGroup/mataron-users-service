import Users from '../../models/db/UserDBModel';

export interface IUSerDBHandler{
    insertUser(data : object) : Promise<void>;

    deletetUser(id : string) : Promise<number>;

    updateUser(id : string , data : object) : Promise<any>;

    getUser(id : string) : Promise<Users>;

    getAllUser() : Promise<Users[]>;

    getAllUserByTask(task : any) : Promise<Users[]>;

    postArrayOfUsers(users: object[]): Promise<void>;
}