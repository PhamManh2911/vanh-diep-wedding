import * as pg from "pg";
import { DataTypes, Sequelize } from "sequelize";

import { postgresURI } from "@/configs/database";

export const sequelize = postgresURI
  ? new Sequelize(postgresURI, { dialectModule: pg })
  : new Sequelize({
      dialect: "sqlite",
      storage: "database.sqlite",
    });

export const User = sequelize.define("User", {
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
