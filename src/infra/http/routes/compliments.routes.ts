import { Router } from "express";
import { makeCreateComplimentController } from "../factories/controllers/ComplimentController";

const complimentsRouter = Router();

complimentsRouter.post("/", makeCreateComplimentController.handle);

export { complimentsRouter };
