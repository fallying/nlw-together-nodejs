import { CreateTagController } from "../../../../modules/tags/useCases/CreateTag";
import { ListTagsController } from "../../../../modules/tags/useCases/ListTags";

const createTagController = new CreateTagController();
const makeListTagsController = new ListTagsController();

export { createTagController, makeListTagsController };
