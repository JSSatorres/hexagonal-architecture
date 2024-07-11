import { User } from "../domain/User";
import { UserRepository } from "../domain/userRepository";

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(user: User) {
    return this.userRepository.createUser(user);
  }
}