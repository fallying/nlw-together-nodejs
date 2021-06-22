import { EntityRepository, Repository } from "typeorm";
import { User } from "../../../domain";

@EntityRepository(User)
class UsersRepositories extends Repository<User> {}

export {UsersRepositories}