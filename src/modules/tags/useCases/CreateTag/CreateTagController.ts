import { Request, Response } from "express";
import { CreateTag } from "./CreateTag";

class CreateTagController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createTag = new CreateTag();

    const tag = await createTag.execute(name);

    return response.json(tag);
  }
}

export { CreateTagController };
