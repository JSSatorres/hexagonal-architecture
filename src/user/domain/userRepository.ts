import { User } from "./User";

export interface UserRepository {
  createUser(user: User): Promise<User>;
  getAllUsers(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
}