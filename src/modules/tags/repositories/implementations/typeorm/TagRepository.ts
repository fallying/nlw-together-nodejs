import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../../../domain";

@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag> {}

export { TagsRepositories };
