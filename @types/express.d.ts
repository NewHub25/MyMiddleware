import "express";

declare global {
  namespace Express {
    interface Request {
      datosUsuario?: {
        id: number;
        nombre: string;
      };
    }
  }
}
