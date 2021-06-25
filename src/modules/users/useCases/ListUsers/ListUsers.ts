import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { User } from "../../domain";
import { UsersRepositories } from "../../repositories";

class ListUsers {
  async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepositories);

    const users = await usersRepository.find();

    return classToPlain(users) as User[];
  }
}

export { ListUsers };
