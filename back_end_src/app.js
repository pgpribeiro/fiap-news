import express from "express";
import cors from "cors";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

//Configuração do MongoDB
const conexao = await dbConnect();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});
conexao.once("open", () => console.log("Conexão com o MongoDB: OK"));

//Configuração do Express
const app = express();
// 🔥 Habilita CORS para todas as origens
app.use(cors());
routes(app);

export default app;
