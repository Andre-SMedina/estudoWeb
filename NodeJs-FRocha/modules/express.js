const express = require("express");
const port = 8080;
const UserModel = require("../src/database/models/user.model");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./src/views");

//"endpoint" para views
app.get("/views/users", async (req, res) => {
  res.render("index");
});

//"Middleware" roda antes de qualquer requisição
app.use((req, res, next) => {
  console.log(`Rquest Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

//"Endpoint" get mostra os usuários
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(201).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//"Endpoint" buscar usuário pelo ID
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//"Endpoint" post cria os usuários
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    //201 diz que o registro foi criado com sucesso
    res.status(201).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//"Endpoint" para atualizar usuário
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    //new: true é pra mostar depois o email atualizado
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//"Endpoint" deletar usuário
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.listen(port, () => console.log(`Rodando na porta ${port}!`));
