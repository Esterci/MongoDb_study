# Relacional x Não relacional

* Os bancos relacionais demandam uma forte configuração de: tabelas e relações entre tabelas para o seu funcionamento;
* Os não relacionais não são rigorosos quanto a isso, podemos criar colunas quando o dado é inserido;
* O que gera flexibilidade para o não relacional e também pode ser o sinônimo de desorganização;
* Apesar do nome, o não relacional pode ter relações entre collections;

# E o MongoDB?

* É o banco mais utilizado;
* Os dados são inseridos em formato de objeto (JSON);
* Os comandos, em vex queries, são métodos;
* Podemos criar relações entre entidades;
* Facilmente adaptado para diversas linguagens através de drivers;
* Possui uma proximidade com JavaScript;

# Principais entidades

* Database: é onde ficam as nossas collections e dados;
* Collections: são como as tabelas nos bancos realcionais, nelas vamos inserir os daddos;
* Documents: são os dados, no MongoDb tem esta nomenclatura;
* Collections podem ser criadas livremente a qualquer momento e não possuem chaves fixas para os dados;

# MongoDB e JSON

* O tipo de dado inserido na tabela é o BOSON, uma variação de JSON;
* O BSON é semelhante ao JSON, porém com recursos a mais;
* A forma de criar um BSON é igual ao JSON, veja:

  ```json
  {
  	nome: "Matheus",
  	idade: 30
  }
  ```

[BJON Documentation](https://www.mongodb.com/pt-br/docs/manual/reference/bson-types/#:~:text=BSON%20%C3%A9%20um%20formato%20de,est%C3%A1%20localizada%20em%20bsonspec.org%20. "Ducomuntation")

# Primeiro mergulho

* Vamos dar o nosso primeiro mergulho no MongoDB;
* Nossa missão será criar um banco de dados;
* Criar uma colection;
* Inserir um dado e resgatar este mesmo dado por meio de um find;
* Obs: Aprenderemos todos estes comandos em detalhes posteriormente!
* Vamos lá!

## Exercício 1

* Insira um dado na nossa collection;
* Faça a seleção de dados para ver o dado inserido (comando find);

# MongoDB e os drivers

* Quando utilizamos MongoDB em alguma linguagem, precisamos utilizar o driver da mesma;
* Todos estão dispiníveis na documentação oficial;
* Os comandos de shell são os mesmos que o driver de JavaScript (NodeJS), o que facilita muito para as aplicações MERN/MEAN/MEVN;

[Documentação dos Drivers](https://www.mongodb.com/pt-br/docs/drivers/ "Documentation")
