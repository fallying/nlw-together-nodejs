import { Router } from "express";
import { makeAuthenticateUserController } from "../factories/controllers/UserController";

const sessionRouter = Router();

sessionRouter.post("/", makeAuthenticateUserController.handle);

export { sessionRouter };
