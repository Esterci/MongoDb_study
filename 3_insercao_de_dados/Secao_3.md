# Inserindo dados

* Para inserir um document utilizamos o método `inserOne`;
* Desta maneira: `db.collection.insertOne({document})`;
* Onde collection é o nome da collection que vamos inserir dados;
* E dados representa o conjunto de chaves e calores do dado em questão;

# Inserindo vários dados

* Podemos também inserir vários dados de uma vez só, com o método `insertMany`;
* A sintaxe é a seguinte: `db.collection.insertMany({document})`
* note que camos precisar de um array, que vamos inserir os documentos, separados por vírgula;
