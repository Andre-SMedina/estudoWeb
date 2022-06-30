//utiliza apenas o Roter do express
const router = require("express").Router();
const Person = require("../models/Person");

//rotas da API

//criação de dados
router.post("/", async (req, res) => {
  //req.body
  const { name, salary, approved } = req.body;
  if (!name) return res.status(422).json({ error: "O nome é obrigatório." });
  const person = {
    name,
    salary,
    approved,
  };
  try {
    //criando dados no banco
    await Person.create(person);
    res.status(201).json({ message: "Pessoa inserida com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//leitura de dados
router.get("/", async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//buscar por id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const person = await Person.findOne({ _id: id });
    console.log(person);
    if (!person)
      return res.status(422).json({ message: "Usuário não encontrado." });
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//patch atualiza um ou todos os campos e put só atualiza todos
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, salary, approved } = req.body;
  const person = { name, salary, approved };
  try {
    const updatePerson = await Person.updateOne({ _id: id }, person);
    //vê quantos registros foram atualizados
    if (updatePerson.matchedCount === 0)
      return res.status(422).json({ message: "Usuário não encontrado." });
    return res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//deletar dados
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Person.deleteOne({ _id: id });
    res.status(200).json({ message: "Usuário removido." });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//rota inicial / endpoint
router.get("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "Olá Express" });
});

module.exports = router;
