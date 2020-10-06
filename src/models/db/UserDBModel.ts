import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  HasMany,
  HasOne,
  ForeignKey,
  BelongsTo,
  Unique, AutoIncrement
} from 'sequelize-typescript';
import Professions from './Profession';

@Table({tableName:"Users",timestamps: false})
export default class Users extends Model<Users> {

  @AutoIncrement
  @PrimaryKey
  @Column
  ID: number;

  @Column
  PersonalID: string;

  @Column
  UserId: string;

  @Column
  Name: string;

  @Column
  Job: number;

  @ForeignKey(() => Professions)
  @Column
  Profession: number;

  @Column
  CarID: string;

  @Column
  Phone_Number: string;


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