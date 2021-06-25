import { getCustomRepository } from "typeorm";
import { User } from "../../domain";
import { UsersRepositories } from "../../repositories";

class ListUsers {
  async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepositories);

    return usersRepository.find();
  }
}

export { ListUsers };
