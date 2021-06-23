import { Router } from "express";
import { tagRouter } from "./tags.routes";
import { userRouter } from "./users.routes";

const router = Router();

router.use("/users", userRouter);
router.use("/tags", tagRouter);

export { router };
