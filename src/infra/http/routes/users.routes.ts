import { Router } from "express";
import {
  makeListUserComplimentsReceivedController,
  makeListUserComplimentsSentController,
} from "../factories/controllers/UserComplimentsController";
import {
  makeCreateUserController,
  makeListUsersController,
} from "../factories/controllers/UserController";
import { ensureAuthenticated } from "../middlewares";

const userRouter = Router();

userRouter.post("/", makeCreateUserController.handle);

userRouter.get("/", ensureAuthenticated, makeListUsersController.handle);

userRouter.get(
  "/compliments/received",
  ensureAuthenticated,
  makeListUserComplimentsReceivedController.handle
);

userRouter.get(
  "/compliments/sent",
  ensureAuthenticated,
  makeListUserComplimentsSentController.handle
);

export { userRouter };
