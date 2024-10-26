# Atualizando um dado

* Para atualizar um dado utilizamos o método updateOne;
* Primeiro realizamos o filtro e depois inserimos o que precisa ser atualizado;
* Exemplo: `db.books.updateOne({_id:314},{$set:{pageCount: 1000}})`
* O operador $set é onde ficam os valores a serem atualizados;

# Atualizando vários itens

* Para atualizar diversos utilizaremos o updateMany;
* Este método tem a mesma lógica de execução de que o updateOne;
* Exemplo: `db.books.updateMany({categories: "Java"},{$set: {status:"UNPUBLISHED"}})`

# Adicionando dados com update

* O update pode servir para adicionar um dado document;
* Basta inserir um valor para uma chave que não existe no momento;
* Exemplo: `db.books.updateMany({authors: "Vikram Goyal"},{$set:{downloads:1000}})`

# TRocando todo o documento

* Podemos trocar todos os dados do documento com o replaceOne;
* Exemplo: `db.books.replaceOne({_id:120},{foi:"subistituido"} )`;

# Adicionar item a um array

* Se tentarmos atualizar um array diretamente vamos substituir ele;
* Para adicionar um item vamos precisar do operador $push;
* Exemplo> `db.books.updateOne({_id:201},{$push:{categories:"PHP"})`
