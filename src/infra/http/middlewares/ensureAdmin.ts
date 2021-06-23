import { NextFunction, Request, Response } from "express";

export function ensureAdmin(
  request: Request,
  response: Response,
  _next: NextFunction
) {
  const admin = false;

  if (admin) {
    return _next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  });
}
