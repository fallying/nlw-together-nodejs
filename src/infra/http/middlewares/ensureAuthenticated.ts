import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

type IPayload = {
  sub: string;
};

export function ensureAuthenticated(
  request: Request,
  response: Response,
  _next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).end();
  }

  const [, token] = authorization.split(" ");

  try {
    const { sub } = verify(token, "QIDNsEDlJXvWmfBE") as IPayload;

    request.user_id = sub;

    return _next();
  } catch (error) {
    return response.status(401).end();
  }
}
