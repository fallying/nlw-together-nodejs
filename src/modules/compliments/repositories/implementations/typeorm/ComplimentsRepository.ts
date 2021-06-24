import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../../../domain";

@EntityRepository(Compliment)
class ComplimentsRepository extends Repository<Compliment> {}

export { ComplimentsRepository };
