import { CreateUserController } from "../../../../modules/users/useCases/CreateUser";
import { AuthenticateUserController } from "../../../../modules/users/useCases/AuthenticateUser";
import { ListUsersController } from "../../../../modules/users/useCases/ListUsers";

const makeCreateUserController = new CreateUserController();
const makeAuthenticateUserController = new AuthenticateUserController();
const makeListUsersController = new ListUsersController();

export {
  makeCreateUserController,
  makeAuthenticateUserController,
  makeListUsersController,
};
