import { User } from "../domain/userDomain";
import { createPool } from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'hexagonal'
  });
  
  export const userRepository = {
    save: async (user: User): Promise<User> => {
      const [result] = await pool.execute(
        'INSERT INTO users (name, email) VALUES (?, ?)',
        [user.name, user.email]
      );
      return user;
    },
    
    findById: async (id: number): Promise<User | null> => {
      const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
      if (Array.isArray(rows) && rows.length > 0) {
        const row = rows[0];
        return new User(row.id, row.name, row.email);
      }
      return null;
    }
  };