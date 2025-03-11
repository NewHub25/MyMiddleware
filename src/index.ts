// src/index.ts
import express from "express";
import { userMiddleware } from "./middleware.js";

const app = express();
const port = 3000;

app.use(userMiddleware);

app.get("/", (req, res) => {
  if (req.datosUsuario) {
    res.send(`ID: ${req.datosUsuario.id}, Nombre: ${req.datosUsuario.nombre}`);
  } else {
    res.status(500).send("Error interno");
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
