import { postgresURI } from "@/configs/database";
import { DataTypes, Sequelize } from "sequelize";

export const sequelize = new Sequelize(postgresURI ?? {
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

export const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  record_id: DataTypes.STRING,
});