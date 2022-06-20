const express = require("express");
//gera um ID
const { randomUUID } = require("crypto");
const fs = require("fs");

const app = express();

app.use(express.json());

let products = [];

fs.readFile("products.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    //JASON.parse converte de string para obj jason
    products = JSON.parse(data);
  }
});

app.listen(4002, () => console.log("Servidor está rodando na porta 4002."));

//res.send envia uma mensagem na página
app.get("/primeira-rota/:op", (req, res) => {
  const op = req.params.op;
  if (op === "0") {
    //mensagem simples
    return res.send("Acessou a primeira rota simples");
  } else {
    //msg no pacote json
    return res.json({
      message: "Acessou a primeira rota json",
    });
  }
});

/*parametros comuns no express
- Body = Sempre que for enviar dados para a aplicação
- Params = /products/391823517263
- Query = /products?id=13412312312&value=11123141212
*/

//adiciona name e price na lista products
app.post("/products", (req, res) => {
  const { name, price } = req.body;
  const product = {
    name,
    price,
    id: randomUUID(),
  };
  products.push(product);

  ProductFile();

  return res.json(product);
});

//consulta produtos cadastrados
app.get("/products", (req, res) => {
  return res.json(products);
});

//consulta pelo id
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  //retorna todo o obj
  const product = products.find((product) => product.id === id);
  return res.json(product);
});

//alterar informações do produto
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  //retorna apenas o index do obj
  const productIndex = products.findIndex((product) => product.id === id);
  products[productIndex] = {
    ...products[productIndex],
    name,
    price,
  };
  ProductFile();
  return res.json({ message: "Produto alterado com sucesso" });
});

//deletar um produto
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((product) => product.id === id);
  //splice remove o obj da lista
  products.splice(productIndex, 1);
  ProductFile();
  return res.json({ message: "Produto removido com sucesso." });
});

function ProductFile() {
  fs.writeFile("products.json", JSON.stringify(products), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Produto inserido no banco");
    }
  });
}
