import { Request, Response } from "express";
import { IUserRequest } from "../dtos";
import { CreateUser } from "./CreateUser";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, name, admin }: IUserRequest = request.body;

    const createUser = new CreateUser();

    const user = await createUser.execute({name, email, admin});

    return response.json(user);

  }
}

export {CreateUserController}