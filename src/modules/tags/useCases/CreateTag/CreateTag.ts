import { getCustomRepository } from "typeorm";
import { Tag } from "../../domain";
import { TagsRepositories } from "../../repositories";

class CreateTag {
  async execute(name: string): Promise<Tag> {
    const tagsRepository = getCustomRepository(TagsRepositories);

    if (name.length === 0) {
      throw new Error("Invalid tag name");
    }

    const tagAlreadyExists = await tagsRepository.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists");
    }

    const tag = tagsRepository.create({
      name,
    });

    await tagsRepository.save(tag);

    return tag;
  }
}

export { CreateTag };
