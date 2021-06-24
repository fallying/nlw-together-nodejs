import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../../users/repositories";
import { IComplimentRequest } from "../../dtos";
import { ComplimentsRepository } from "../../repositories";

class CreateCompliment {
  async execute({
    tag_id,
    message,
    user_receiver,
    user_sender,
  }: IComplimentRequest) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);
    const usersRepository = getCustomRepository(UsersRepositories);

    if (user_sender === user_receiver) {
      throw new Error("User cann't send for themselves");
    }

    const userReceiverExists = await usersRepository.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new Error("User receiver does not exists");
    }

    const compliment = complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await complimentsRepository.save(compliment);

    return compliment;
  }
}

export { CreateCompliment };
