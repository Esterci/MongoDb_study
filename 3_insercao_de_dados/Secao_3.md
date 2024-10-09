# Inserindo dados

* Para inserir um document utilizamos o método `inserOne`;
* Desta maneira: `db.collection.insertOne({document})`;
* Onde collection é o nome da collection que vamos inserir dados;
* E dados representa o conjunto de chaves e calores do dado em questão;

# Inserindo vários dados

* Podemos também inserir vários dados de uma vez só, com o método `insertMany`;
* A sintaxe é a seguinte: `db.collection.insertMany({document})`
* note que camos precisar de um array, que vamos inserir os documentos, separados por vírgula;

# Alterando _id

* Já sabemos que o _id é único e criado em todos os documents da collection;
* Porém não necessariamente precisamos deixar o cargo do MongoDB, podemos criara o nosso próprio id;
* Exemplo: `db.collection.insertOne({_id:"meuid",nome:"Matheus"})
* Desta forma é possível personalizar este campo!

# Write Concern

* O Write Concer é um configuração que pode ser inserida no insertMany;
* Podemoslimitar o tempo de execução da inserção;
* Retornando um erro de time out caso exceda o mesmo;
* Exemplo: `{w:"majority",wtimeout:100};
* A inserção tem 100ms para ser executada;
