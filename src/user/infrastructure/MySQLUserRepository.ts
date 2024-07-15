import { db } from "../../config/database";
import { User } from "../domain/User";
import { UserRepository } from "../domain/userRepository";

export class MySQLUserRepository implements UserRepository {
    async getAllUsers(): Promise<User[]> {
      const [rows] = await db.query('SELECT * FROM users');
      return rows as User[];
    }

    async findById(id:string): Promise<User> {
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        //const user = rows as User;
        const user = rows as any;
        return user;
    }
  
    async createUser(user: User): Promise<User> {
      const [result] = await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [user.name, user.email, user.password]);
      //user.id = result.insertId;
      return user;
    }
  }