'use strict';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../dbConnect';

class singlesaves extends Model {
  declare id: number;
  declare userId: number;
  declare key: string;
  declare value: string;
}

singlesaves.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'singlesaves',
});

export default singlesaves;