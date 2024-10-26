

# Encontrar todos os dados

* Para encontrar todos dadosvamos utilizar o comando find;
* Exemplo: `db.books.find({})`

# Mais dobre o pretty

* O métodos pretty não nos retorna todos os dados e sim um  cursor;
* Por isso precisamos  digitar it para recever mais registros;
* É  uma forma de retornar menos dados, uma espécie de paginação;
* O cursor também é um objeto, que possui outros métodos em MongoDB;
* Geralmente moddificando a forma que os dados são retornados;

# Encontrar dados com valor específicos

* Para encontrar um dado específico podemos difinir um document dentro do find;
* O primeiro argumento da opção também é chamado de filtro;
* Exemplo: `db.books.find({pageCount:362})`
* Todos os livros com 362 páginas serão retornados;

# Encontrar dado entre valores

* Para esta função vamos utilizar o operador `$in`;
* Teremos uma seção excluisva para operadores posteriormente!
* Exemplo: `db.books.find({categories: {$in:["Java","Internet"]}})`
* Precisamos criar uma lista de valores que queremos buscar;
* Todos estes registros que contiverem um destes valores será retornado;

# Múltiplas condições

* Dados podem ser encontrados baseados um múltiplas condições;
* Basta adicionar uma vírgula no document e inserir o próximo requisito;
* Exemplo: `db.books.find({pageCount:592,_id:63})`
* Neste casp acima buscaremos por um livro com 592 páginas e que tenha o id igual a 63;
* Obs: esta consulta também é semelhante ao operador `AND` em MySQL

# Maior que algum valor

* Outro operador interessante é o que vai buscar valores maiores que um determinado, o operador é o $gt (greater than);
* Exemplo: `db.books.find({pageCount:{$gt:450}})`
* Nestee exemplo buscamos livros que tem mais que 450 páginas;
* Note que inserimos um novo documnet para determinar o `$gt`;

# Menor que algum valor

* O operador é o $lt (less than);
* Exemplo: `db.books.find({pageCount:{$lt:120}})`
* Neste exemplo buscamos livros que tem menos que 120 páginas;

# Operador $or

* o operador $or é utilizado para resgatar dados que possuem um valor ou outro;
* Exemplo: `db.books.find({$or:[{pageCount:{$gt:500}},{_id:{$lt:5}}]})`

# Operador and e or na mesma consulta

* Como visto anteriormente, podemos unir vários operadores;
* Exemplo: `db.books.find({status:"PUBLISH",$or:[{pageCount:500},{authors:"Robi Sen"}]})`
* Aqui buscamos livros publicados e que tenham 500 páginas ou autor seja Robi Sen;

# Contando número de resultados

* Para contar o número de retornos de uma consulta, podemos utilizar o método count;
* Exemplo: `db.books.find({PageCount: {$gt: 600}}).count()`
