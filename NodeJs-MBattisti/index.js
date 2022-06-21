//config inicial
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

// forma de ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//rotas da API
const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

//usar a função encodeURIComponent() se houver caracteres não aceitos pela URL, como espaços
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.rnsitng.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectado ao banco!");
    // entregar uma porta
    app.listen(3000);
  })
  .catch((err) => console.log(err));
