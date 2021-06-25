import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../../modules/users/repositories";

export async function ensureAdmin(
  request: Request,
  response: Response,
  _next: NextFunction
) {
  const { user_id } = request;

  const usersRepositories = getCustomRepository(UsersRepositories);

  const { admin } = await usersRepositories.findOne(user_id);

  if (admin) {
    return _next();
  }

  return response.status(401).end();
}
