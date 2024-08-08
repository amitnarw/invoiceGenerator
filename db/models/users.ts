'use strict';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../dbConnect';

class users extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare phone: number;
}

users.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'users',
});

export default users;