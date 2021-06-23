import { Router } from "express";
import { createTagController } from "../factories/controllers/CreateTagController";
import { ensureAdmin } from "../middlewares";

const tagRouter = Router();

tagRouter.post("/", ensureAdmin, createTagController.handle);

export { tagRouter };
