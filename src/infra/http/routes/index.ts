import { Router } from "express";
import { complimentsRouter } from "./compliments.routes";
import { sessionRouter } from "./sessions.routes";
import { tagRouter } from "./tags.routes";
import { userRouter } from "./users.routes";

const router = Router();

router.use("/users", userRouter);
router.use("/tags", tagRouter);
router.use("/sessions", sessionRouter);
router.use("/compliments", complimentsRouter);

export { router };
