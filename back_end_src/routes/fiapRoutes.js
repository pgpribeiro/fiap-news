import express from "express";
import FiapController from "../controllers/fiapController.js";

const routes = express.Router();

// Create
routes.post("/fiap", FiapController.cadastrarNews);

// Gets
routes.get("/fiap", FiapController.listarFiap);
routes.get("/fiap/buscaall", FiapController.listarNewsTitle);
routes.get("/fiap/:id", FiapController.listarNewsPorId);

// Update
routes.put("/fiap/:id", FiapController.atualizarNews);

// Delete
routes.delete("/fiap/:id", FiapController.excluirNews);

export default routes;
