# Verificar todos os bancos

* Podemos verificar os banco de dados com:
* ```bash
  show dbs
  ```
* Este comando mostra todos os DBs criados até o momento;
* Note que há alguns bancos do próprio Mongo já criados;

# Criando bando de dados

* Para criar um banco utilizamos a intrução:

```bash
use <nome>
```

* Isso fará com que um banco seja inicializado, proém ele só será registrado de fato quando houver algum dado nele;
* Podemos checar o banco atual com o comando:

```bash
db
```

* O comando use também serve para mudar de bancos de dados;

# Criando Collections

* Não precisamos explicitamente criar uma collection, basta inserir um dado em alguma;
* Com o comando:

```bash
db.<collection>.insertOne(<objeto>)
```

* A colection sera criada automaticamente, e também o banco de dados persisterá no sistema;
* Note que a intrução db vai referir sempre banco de dados;

# Encontrando dados

* Para buscar dados utilizamos o comando:

```bash
find
```

* Este comando recebe um filtro, para selecionarmos dados específicos;
* Exemplo:
  ```bash
  db.`<collection>.find({nome:"João"})`
  ```
* Neste caso buscamos por um document com a chave nome e um valor João;

# A função pretty

* A função `pretty` pode ser adicionada a alguns comandos;
* O resultado é um retorno de dados melhor formatado;
* Desta forma fica mais legível e conseguimos entender melhor o que retornou;
* Ela é muito utilizada com o `find`;

# Criando uma collection implícita

* Há a possibilidade de criar a collection com um comando também;
* Exemplo: `db.createCollection("nome",{opções})`
* Podemos definir alguns perâmetros de configuração como: número máximo de registros, tamanho máximo da collection e etc;

# Exibir todas as collections

* Para exibir todas as collections ustilizamos: `show collections`
* Este comando de verificação nos ajuda a entender melhor o banco de dados;
* Lembrando que, para uma collection se criada de fato, ela precisa ter algum dado inserido nela;

## Exercício 3

* Crie uma collection com dados de nome de pessoas e salários;
* Utilize o comando find para verificar os registros dela;
* Verifique todas as collections do banco;

# A chave _id

* Todo registro inserido no banco vem com uma chave chamada _id;
* Esta chave tem como objetivo criar um identificados único para todo registro;
* Consultas com o índice são mais rápidas;

# Removendo collections

* Podemos remover collections quando elas não forem mais necessárias ou se erramos o nome, por exemplo;
* O comando é : `db.<collention>.drop()`
* Após a execução todos os dados serão removidos também;

# Removendo banco de dados

* O comando é: `db.dropDatabase()`

# Importar bancos em JSON

* Um formato muito encontrado de bancos de de MongoDB é `.json`;
* Vamos utilizar uma funcionalidade do tools para realizar a importação;
* O comando é:``mongoimport arquivo -d datavase -c collection``
* Desta maneira criamos um banco de dados nomeando no comando também uma collection;

# Exportar bancos em JSON

* Outra ação comum é exportar bancos de dados;
* Para esta ação utilizamos: `mongoexport -c collection -d database -o output`;
* Onde definimos qual collection estamos exportando, qual banco e qual o arquivo de saída;

# Exportat muitas collections

* Quando o banco possui mais de uma collection a melhor opção de exportação é o mongodump;
* Utilizamos assim: `mongodump -d banco -o diretorio`
* Onde -o criará uma pasta, com os arquivos de cada collection;

# Importar dados do mongodump

* Para importar os arquivos gerados do mongodump, utilizamoso `mongorestore`;
* O comando é o seguinte: `mongorestore diretorio`;

# Status do MongoDB

* Podemos checar algumas informações como: quantidade de consultas rodando, consumo de rede e outros dados;
* O comando é `mongostat`;
* Teremos uma aba do terminal ocupada, atualizando todo o segundo trazendo informalções em tempo real;
