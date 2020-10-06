import {Table, Column, Model, PrimaryKey, AllowNull, HasMany, HasOne, ForeignKey, BelongsTo} from 'sequelize-typescript';
import Professions from './Profession';

@Table({tableName:"Users",timestamps: false})
export default class Users extends Model<Users> {


  @PrimaryKey
  @Column
  PersonalID: number;


  @Column
  UserId: number;

  @Column
  Name: string;

  @Column
  Job: number;

  @ForeignKey(() => Professions)
  @Column
  Profession: number;

  @Column
  CarID: number;

  @Column
  Phone_Number: number;


  @Column
  Address: string;


  @Column
  Type_Of_Service: string;

  @Column
  Rank: string;

  @Column
  C_In_Charge: string;


  @Column
  Gender: string;

  @BelongsTo(() => Professions)
  Professions : Professions

}