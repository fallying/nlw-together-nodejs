import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import "./infra/database";
import { router } from "./infra/http/routes";

const app = express();

app.use(express.json());
app.use(router);

app.use(
  (error: Error, request: Request, response: Response, _next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json({
        error: error.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

export { app };
