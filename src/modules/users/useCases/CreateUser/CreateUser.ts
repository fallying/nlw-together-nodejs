import { getCustomRepository } from "typeorm";
import { User } from "../../domain";
import { IUserRequest } from "../../dtos";
import { UsersRepositories } from "../../repositories";
import { hash } from "bcryptjs";

class CreateUser {
  async execute({ email, name, admin, password }: IUserRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error("Invalid email");
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUser };
