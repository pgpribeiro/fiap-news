import fiap from "../models/Fiap.js";

class FiapController {

   static async cadastrarNews (req, res) {
       try {
           const news = await fiap.create(req.body);
           res.status(200).json({ message: "criado com sucesso", news: news });
       } catch (erro) {
           res.status(500).json({ message: `${erro.message} - falha ao cadastrar News` });
       }
   }

    static async listarFiap (req, res) {
        try {
            const listaNews = await fiap.find({});
            res.status(200).json(listaNews);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

  static async listarNewsTitle (req, res) {
    const title = req.query.title;
    try {
        const newsPorTitle = await fiap.find({ title: title });
        res.status(200).json(newsPorTitle);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na busca` });
    }
  };

  static async listarNewsPorId (req, res) {
    try {
      const id = req.params.id;
      const newEncontrada = await fiap.findById(id);
      res.status(200).json(newEncontrada);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
    }
  };



  static async atualizarNews (req, res) {
    try {
      const id = req.params.id;
      await fiap.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "fiap atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  };

  static async excluirNews (req, res) {
    try {
        const result = await fiap.findOneAndDelete({ id: req.params.id }); // Buscar por 'id' e não '_id'
        if (!result) {
            return res.status(404).json({ message: "Notícia não encontrada" });
        }
        res.json({ message: "Notícia deletada com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao excluir a notícia", error: error.message });
    }
  };
};

export default FiapController;
