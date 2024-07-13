import { UserRepository } from "../domain/userRepository";


export class GetUser {
  constructor(private userRepository: UserRepository) {}

  async execute() {
    return this.userRepository.getAllUsers();
  }
}