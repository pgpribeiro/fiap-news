import express from 'express';
import fiap from './fiapRoutes.js';

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("FIAP - NEWS - API \n Status: Up");
  });

  app.use(express.json(), fiap);
}

export default routes;
