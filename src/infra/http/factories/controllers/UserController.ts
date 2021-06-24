import { CreateUserController } from "../../../../modules/users/useCases/CreateUser";
import { AuthenticateUserController } from "../../../../modules/users/useCases/AuthenticateUser";

const makeCreateUserController = new CreateUserController();
const makeAuthenticateUserController = new AuthenticateUserController();

export { makeCreateUserController, makeAuthenticateUserController };
