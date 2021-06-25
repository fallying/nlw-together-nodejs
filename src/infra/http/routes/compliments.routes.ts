import { Router } from "express";
import { makeCreateComplimentController } from "../factories/controllers/ComplimentController";
import { ensureAuthenticated } from "../middlewares";

const complimentsRouter = Router();

complimentsRouter.post(
  "/",
  ensureAuthenticated,
  makeCreateComplimentController.handle
);

export { complimentsRouter };
