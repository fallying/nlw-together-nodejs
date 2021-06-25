import { Request, Response } from "express";
import { ListUsers } from ".";

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsers = new ListUsers();

    const users = await listUsers.execute();

    return response.json(users);
  }
}

export { ListUsersController };
