import { Sequelize } from 'sequelize';

// Option 3: Passing parameters separately (other dialects)
const db = new Sequelize('productsdb', 'root', 'joey18ABRIL', {
  host: 'localhost',
  // one of our supported dialects:
  // 'mysql', 'mariadb', 'postgres', 'mssql', 'sqlite', 'snowflake', 'db2' or 'ibmi'
  dialect: 'mysql'
});

export default db;