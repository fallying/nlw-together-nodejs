import { Router } from "express";
import { makeCreateUserController } from "../factories/controllers/UserController";

const userRouter = Router();

userRouter.post("/", makeCreateUserController.handle);

export { userRouter };
