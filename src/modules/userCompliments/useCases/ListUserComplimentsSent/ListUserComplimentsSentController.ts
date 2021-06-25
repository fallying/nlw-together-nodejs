import { Request, Response } from "express";
import { ListUserComplimentsSent } from "./ListUserComplimentsSent";

class ListUserComplimentsSentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;

    const listUserComplimentsSent = new ListUserComplimentsSent();

    const compliments = await listUserComplimentsSent.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserComplimentsSentController };
