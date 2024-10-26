// 1. Selecionar os livros da categoria Java;
db.books.find({ categories: "Java" })

// 2. Selecionar os livros com menos de 100 páginas;
db.books.find({ pageCount: { $lt: 100 } })

// 3. Selecionar os livros da categoria Microsoft com mais 
// de 300 páginas;
db.books.find({
    categories: "Microsoft",
    pageCount: { $gt: 300 }
})

// 4. Conte quantos livros estão na categoria Web Develompment;
db.books.find({ categories: "Web Development" }).count()

// 5. Utilize o operador $or para resgatar livros de Bret Updegraff
// ou que são da categoria mobile;
db.books.find({
    $or: [
        { categories: "Mobile" },
        { authors: "Bret Updegraff" }]
})