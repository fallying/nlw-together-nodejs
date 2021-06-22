import {Router} from 'express'
import { createUserController } from '../factories/controllers/CreateUserController';

const userRouter = Router();

userRouter.post("/", createUserController.handle);

export { userRouter }