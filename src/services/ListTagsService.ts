import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";

class ListTagService {
  async execute() {
    const tagsRepostitories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepostitories.find();

    return classToPlain(tags);
  }
}

export { ListTagService };
