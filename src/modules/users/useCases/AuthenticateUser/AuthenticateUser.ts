import { getCustomRepository } from "typeorm";
import { IAuthenticateUserRequest } from "../../dtos";
import { UsersRepositories } from "../../repositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

class AuthenticateUser {
  async execute({
    email,
    password,
  }: IAuthenticateUserRequest): Promise<string> {
    const usersRepository = getCustomRepository(UsersRepositories);

    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const validPassword = await compare(password, user.password);

    if (!validPassword) {
      throw new Error("Invalid email or password");
    }

    const token = sign({ id: user.id }, "QIDNsEDlJXvWmfBE", {
      subject: user.id,
      expiresIn: "1d",
    });

    return token;
  }
}

export { AuthenticateUser };
