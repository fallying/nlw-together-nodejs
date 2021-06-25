import { Request, Response } from "express";
import { ListTags } from ".";

class ListTagsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTags = new ListTags();

    const tags = await listTags.execute();

    return response.json(tags);
  }
}

export { ListTagsController };
