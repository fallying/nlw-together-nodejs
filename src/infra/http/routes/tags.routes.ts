import { Router } from "express";
import { createTagController } from "../factories/controllers/CreateTagController";
import { ensureAdmin, ensureAuthenticated } from "../middlewares";

const tagRouter = Router();

tagRouter.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

export { tagRouter };
