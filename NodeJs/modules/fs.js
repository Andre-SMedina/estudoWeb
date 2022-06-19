const fs = require("fs");
const path = require("path");

//Criar uma pasta
/* fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log("Pasta criada com sucesso!");
}); */

// Cria um arquivo e substitui todo o conteúdo se já existir o arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello Node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado co sucesso!");

    // Alterar um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "Hello World!",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Arquivo alterado com sucesso!");
      }
    );

    //Ler um arquivo
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf-8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log(data);
      }
    );
  }
);
