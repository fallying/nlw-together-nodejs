import { Request, Response } from "express";
import { ListUserComplimentsReceived } from ".";

class ListUserComplimentsReceivedController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;

    const listUserCompliments = new ListUserComplimentsReceived();

    const compliments = await listUserCompliments.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserComplimentsReceivedController };
