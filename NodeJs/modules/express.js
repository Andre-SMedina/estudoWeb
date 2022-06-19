const express = require("express");
const port = 8080;
const UserModel = require("../src/database/models/user.model");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("applications/html");
  res.status(200).send("<h1>Hello World</h1>");
});

//get mostra os usuários
app.get("/users", (req, res) => {
  const users = [
    {
      name: "André Luis",
      email: "andre@gmail.com",
    },
    {
      name: "Pedro junior",
      email: "pedro@gmail.com",
    },
  ];

  res.status(200).json(users);
});

//post cria os usuários
app.post("/users", (req, res) => {
  const user = UserModel.create(req.body);
  //201 diz que o registro foi criado com sucesso
  res.status(201).json(user);
});

app.listen(port, () => console.log(`Rodando na porta ${port}!`));
