import {Table, Column, Model, DeletedAt, UpdatedAt, CreatedAt, PrimaryKey, AllowNull, HasMany} from 'sequelize-typescript';
import Users from './UserDBModel';
 
@Table({tableName:"Profession",timestamps: false})
export default class Profession extends Model<Profession> {

  
  @PrimaryKey
  @Column
  ID: number;

  @Column
  Type: string;

  @HasMany(() => Users)
  Users: Users[];

}