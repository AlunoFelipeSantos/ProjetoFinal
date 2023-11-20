const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: '*'
}));
const eventos = require('./models/eventos');//

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Eu vou tomar um TACACA");
});

//endpoint para cadastrar
app.post("/cadastrar", async (req, res) => {
   console.log(req.body);

    await eventos.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Evento cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Evento não cadastrado!"
        });
    });

    //res.send("Página cadastrar");
});

//endpoint para listar
app.get("/listar", async (req, res) => {

    const even = await eventos.findAll({order: [['createdAt']]})
    .catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro ao listar!"
        });
    });

    return res.json(even);

});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});

//endpoint para buscar