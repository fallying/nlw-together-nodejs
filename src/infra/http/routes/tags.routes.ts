import { Router } from "express";
import {
  createTagController,
  makeListTagsController,
} from "../factories/controllers/TagController";
import { ensureAdmin, ensureAuthenticated } from "../middlewares";

const tagRouter = Router();

tagRouter.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

tagRouter.get("/", makeListTagsController.handle);

export { tagRouter };
