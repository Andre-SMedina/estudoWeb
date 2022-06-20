const express = require("express");
//gera um ID
const { randomUUID } = require("crypto");

const app = express();

app.use(express.json());

const products = [];

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
    price, // --------------------------VERIFICAR PORQUE NÃO ADD DIRETO NA LISTA PRODUCTS
    id: randomUUID(),
  };
  products.push(product);

  return res.json(product);
});

//consulta produtos cadastrados
app.get("/products", (req, res) => {
  return res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === id);
  return res.json(product);
});
