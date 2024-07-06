import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'my_user',
  password: 'my_password',
  database: 'my_database',
});