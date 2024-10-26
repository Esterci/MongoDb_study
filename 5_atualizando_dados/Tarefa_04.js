// 1. Após qualquer atualização, faça uma seleção de dados para 
// verificar se o registro está correto;
// 2. Atualize o status do livro Flex 4 in Action par OUT OF STOCK;
db.books.updateOne(
    { title: "Flex 4 in Action" },
    { $set: { status: "OUT OF STOCK" } }
)
db.books.find(
    { title: "Flex 4 in Action" }
)

// 3. Atualize todos os livros que tem menos de 100 página com 
// a chave short_book e o valor true
db.books.updateMany(
    { pageCount: { $lt: 100 } },
    { $set: { short_book: true } }
)
db.books.find({ pageCount: { $lt: 100 } })

// 4. Adicione a categoria Many Pages aos livros da 
// categoria Java com mais de 500 páginas
db.books.updateMany(
    { categories: "Java", pageCount: { $gt: 500 } },
    { $push: { categories: "Many Pages" } }
)
db.books.find({ categories: "Java", pageCount: { $gt: 500 } })
