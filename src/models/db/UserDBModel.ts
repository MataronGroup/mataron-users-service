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

  @BelongsTo(() => Professions)
  Professions : Professions

}