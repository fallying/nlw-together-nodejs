import { getCustomRepository } from "typeorm";
import { Tag } from "../../domain";
import { TagsRepositories } from "../../repositories";

class ListTags {
  async execute(): Promise<Tag[]> {
    const tagsRepository = getCustomRepository(TagsRepositories);

    return tagsRepository.find();
  }
}

export { ListTags };
