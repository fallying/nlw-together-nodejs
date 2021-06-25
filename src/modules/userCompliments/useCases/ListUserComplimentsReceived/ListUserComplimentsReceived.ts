import { getCustomRepository } from "typeorm";
import { Compliment } from "../../../compliments/domain";
import { ComplimentsRepository } from "../../../compliments/repositories";

class ListUserComplimentsReceived {
  async execute(user_id: string): Promise<Compliment[]> {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepository.find({
      where: { user_receiver: user_id },
    });

    return compliments;
  }
}

export { ListUserComplimentsReceived };
