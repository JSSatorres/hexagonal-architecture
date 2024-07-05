import { User } from "../domain/userDomain";


export const createUser = async (data: Partial<User>): Promise<User> => {
  const user = new User(data.id!, data.name!, data.email!);
  return userRepository.save(user);
};

export const getUser = async (id: number): Promise<User | null> => {
  return userRepository.findById(id);
};