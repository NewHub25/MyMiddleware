import { Request, Response, NextFunction } from "express";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  req.datosUsuario = {
    id: 1,
    nombre: "Juan",
  };
  next();
};
