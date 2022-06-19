//"npm install nodemon --save-dev" -para atualizar o node a cada alteração
//"npm run start:dev" para rodar o script no json com o nodemon
//"npm install mongoose" - instalar mongo
//"npm nstall dotenv" - para gerenciar arquivos .env, onde guarda senhas
//"npm install ejs"

// const { Person } = require("./person");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
require("./modules/express");

// const person = new Person("André");
