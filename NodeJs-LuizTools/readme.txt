* npm install -g express-generator
* npm install mongodb
* express -e --git testeaula01 //cria a pasta testeaula01, que será a pasta do projeto, -e é para instalar o ejs e --git é o que deve ser ignorado pelo git
* entra na pasta do projeto(testeaula01) e roda o npm install para criar o package.json
* npm install nodemon. depois vai em package.json, em scripts, muda node para nodemon. Pra rodar é npm start
* npm install helmet - para protejer de alguns ataques
* artillery para testar limite de acesso ao sistema
* lodash--> para trabalhar com arrays

----banco de dados mongodb----
-Baixe o arquivo zip "Download MongoDB Community Server"
-Dentro dos arquivos baixados, vá na pasta bin através de um terminal do DOS
e execute "./mongod --dbpath (aqui é o caminho para a pasta onde vai criar o servidor. sem os parenteses)"
-Agora inicie cliente em outro terminal do DOS, na mesma pasta bin com o comando ./mongo

-------comandos no mongodb---------
show databases
use aula02---> usar um banco
db.clientes.count()---> contar registros na collection clientes

db.clientes.find()---> para fazer buscas
db.clientes.find().pretty()--->o resultado das buscas fica mais organizado
db.clientes.find({idade: 39}).pretty()--->busca específica
db.clientes.find({nome: "André Luis", idade: 39}).pretty()--->usando a vírgula, busca apenas registros com esse nome e a idade
db.clientes.find({nome: /and/i}).pretty()--->usando a regex /../i a busca ignora maiúsculas e minúsculas e trás os nomes que tiver /and/
db.clientes.find({idade: {$gt: 29}})---> procura idade maior que 29(gte: >=, lt: <, lte: <=, ne: não igual)
db.clientes.find().sort({idade: 1})--->faz busca ordenando por idade crescente. -1 é decrescente

db.clientes.insert({nome: "AndreLuis", idade: 39})---> inserir dados
db.clientes.insert([{nome: "Jose Carlos", idade: 26}, {nome: "Pedro Lucas", idade: 31}])--->pode usar entre colchetes para inserir mais um registro ao mesmo tempo

db.clientes.update({idade: 39}, {nome: "José Pedro"})---> para modificar um registro inteiro o primeiro campo é para identificar e o segundo todos os novos valores
db.clientes.updateOne({_id: ObjectId("62b0b48f83f3cbb2f1a6406c")}, {$set: {nome: "Raimundo Carlos", idade: 40}})---> para modificar apenas uma parte do registro

db.clientes.remove({_id: ObjectId("62b0b16b83f3cbb2f1a6406b")})---> remover sempre pelo ObjectId

Após a primeira inserção de dados através do insert, o banco aula02 e a collections clientes será criada
