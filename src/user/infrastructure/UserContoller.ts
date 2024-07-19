import { Request, Response } from 'express';
import { GetUser } from '../application/GetUser';
import { CreateUser } from '../application/createUser';
import { User } from '../domain/User';
import { MySQLUserRepository } from './MySQLUserRepository';

const userRepository = new MySQLUserRepository();

export const getAllUsers = async (req: Request, res: Response) => {
  const getUser = new GetUser(userRepository);
  const users = await getUser.execute();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const createUser = new CreateUser(userRepository);
  const user = await createUser.execute(new User('1', name, email, password));
  res.status(201).json(user);
};