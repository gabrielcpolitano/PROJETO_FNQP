

var livros = [];
var usuarios = [];

livros.push(
    { id: 1, titulo: "O sobrinho do mago", autor: "C.S. Lewis", genero: "ficção", anoPublicacao: 1997, disponivel: true },
    { id: 2, titulo: "1984", autor: "George Orwell", genero: "ficção distópica", anoPublicacao: 1949, disponivel: true },
    { id: 3, titulo: "O Gene", autor: "Siddhartha Mukherjee", genero: "ciência", anoPublicacao: 2016, disponivel: false },
    { id: 4, titulo: "Sapiens: Uma Breve História da Humanidade", autor: "Yuval Noah Harari", genero: "história", anoPublicacao: 2011, disponivel: true },
    { id: 5, titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "ficção fantástica", anoPublicacao: 1937, disponivel: true },
    { id: 6, titulo: "Cosmos", autor: "Carl Sagan", genero: "ciência", anoPublicacao: 1980, disponivel: false }
);
usuarios.push({ id: 1, nome: "Mariana Jess", livrosEmprestados: [3] }, { id: 2, nome: "João Pyther", livrosEmprestados: [6] });


var usuario = { id: 1, nome: "Mariana Jess", livrosEmprestados: [3] };
var usuario2 = { id: 2, nome: "João Pyther", livrosEmprestados: [6] };
let usuarios = [usuario, usuario2];

function adicionarLivro(titulo, autor, genero, anoPublicacao) {
    let tamanhoLista = livros.length;
    let idSequencial = tamanhoLista > 0 ? tamanhoLista + 1 : 1;
    let livro = { id: idSequencial, titulo, autor, genero, anoPublicacao, disponivel: true }

    livros.push(livro);
    return livros;
};

function listarLivrosDisponiveis() {
    return livros.filter(livro => livro.disponivel === true);
}

function listarLivrosEmprestados(idUsuario) {
    let usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (!usuario) return [];

    let livrosEmprestados = livros.filter(livro => usuario.livrosEmprestados.includes(livro.id));
    return livrosEmprestados;
}


function registrarUsuario(nome) {
    let tamanhoLista = usuarios.length;
    let idSequencial = tamanhoLista > 0 ? idSequencial + 1 : 1;
    let usuario = { id: idSequencial, nome, livrosEmprestados: [] };

    usuarios.push(usuario);
    return usuarios;
};

emprestarLivro(idLivro, idUsuario);
devolverLivro(idLivro, idUsuario);

buscarLivro(termo);

adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", "Ficção", 1954);
adicionarLivro("1984", "George Orwell", "Ficção", 1949);
registrarUsuario("Alice");
registrarUsuario("Bob");
emprestarLivro(1, 1); // Alice pega o livro com ID 1
listarLivrosDisponiveis(); // Deve listar apenas o livro "1984"
listarLivrosEmprestados(1); // Deve listar "O Senhor dos Anéis" para Alice
devolverLivro(1, 1); // Alice devolve o livro com ID 1
listarLivrosDisponiveis(); // Deve listar "O Senhor dos Anéis" e "1984" novamente