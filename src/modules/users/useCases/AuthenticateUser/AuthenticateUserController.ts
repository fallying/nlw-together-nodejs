import { Request, Response } from "express";
import { AuthenticateUser } from "./AuthenticateUser";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUser();

    const token = await authenticateUser.execute({ email, password });

    return response.json({ token });
  }
}

export { AuthenticateUserController };
