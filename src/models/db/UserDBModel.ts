import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import Professions from './Profession';

@Table({tableName:"Users",timestamps: false})
export default class Users extends Model<Users> {

  @PrimaryKey
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
  PhoneNumber: string;


  @Column
  Address: string;


  @Column
  TypeOfService: string;

  @Column
  Rank: string;

  @Column
  CommanderInCharge: string;


  @Column
  Gender: string;

  @Column
  SleepingRoom: string;


  @Column
  SleepingBuilding: string;

  @BelongsTo(() => Professions)
  Professions : Professions



}