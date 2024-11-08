

var livros = [];
var usuarios = [];

// livros.push(
//     { id: 1, titulo: "O sobrinho do mago", autor: "C.S. Lewis", genero: "ficção", anoPublicacao: 1997, disponivel: true },
//     { id: 2, titulo: "1984", autor: "George Orwell", genero: "ficção distópica", anoPublicacao: 1949, disponivel: true },
//     { id: 3, titulo: "O Gene", autor: "Siddhartha Mukherjee", genero: "ciência", anoPublicacao: 2016, disponivel: false },
//     { id: 4, titulo: "Sapiens: Uma Breve História da Humanidade", autor: "Yuval Noah Harari", genero: "história", anoPublicacao: 2011, disponivel: true },
//     { id: 5, titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "ficção fantástica", anoPublicacao: 1937, disponivel: true },
//     { id: 6, titulo: "Cosmos", autor: "Carl Sagan", genero: "ciência", anoPublicacao: 1980, disponivel: false }
// );
// usuarios.push({ id: 1, nome: "Mariana Jess", livrosEmprestados: [3] }, { id: 2, nome: "João Pyther", livrosEmprestados: [6] });


// var usuario = { id: 1, nome: "Mariana Jess", livrosEmprestados: [3] };
// var usuario2 = { id: 2, nome: "João Pyther", livrosEmprestados: [6] };
// let usuarios = [usuario, usuario2];

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
    let nomeLivrosEmprestados =  livrosEmprestados.map(livro => livro.titulo).join(", ");

    return `${nomeLivrosEmprestados} para usuario ${usuario.nome}`;
}


function registrarUsuario(nome) {
    let tamanhoLista = usuarios.length;
    let idSequencial = tamanhoLista > 0 ? tamanhoLista + 1 : 1;
    let usuario = { id: idSequencial, nome, livrosEmprestados: [] };

    usuarios.push(usuario);
    return usuarios;
};

function emprestarLivro(idLivro, idUsuario) {
    let livro = livros.find(livro => livro.id === idLivro);
    if (!livro) return "Nao existe livro para esse id";
    if (!livro.disponivel) return "Livro indisponivel";

    let usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (!usuario) return "Nao existe usuario";

    usuario.livrosEmprestados.push(idLivro);
    livro.disponivel = false;

    return `${usuario.nome} pega o livro ${livro.titulo} com ID ${livro.id}`;
};

function devolverLivro(idLivro, idUsuario) {
    let livro = livros.find(livro => livro.id === idLivro);
    if (!livro) return "Nao existe livro para esse id";

    let usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (!usuario) return "Nao existe usuario";

    if (usuario.livrosEmprestados.includes(idLivro)) {
        usuario.livrosEmprestados = usuario.livrosEmprestados.filter(livroId => livroId !== idLivro);
        livro.disponivel = true;

        return `${usuario.nome} devolve o livro ${livro.titulo} com ID ${livro.id}`;
    } else {
        return `${usuario.nome} não possui este livro emprestado`;
    }
};

function buscarLivro(termo) {
    return livros.filter(livro => livro.titulo.toLowerCase().includes(termo.toLowerCase()));
};
console.log(adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", "Ficção", 1954));
console.log(adicionarLivro("1984", "George Orwell", "Ficção", 1949));
console.log(registrarUsuario("Alice"));
console.log(registrarUsuario("Bob"));
console.log(emprestarLivro(1, 1)); // Alice pega o livro com ID 1
console.log(listarLivrosDisponiveis()); // Deve listar apenas o livro "1984"
console.log(listarLivrosEmprestados(1)); // Deve listar "O Senhor dos Anéis" para Alice
console.log(devolverLivro(1, 1)); // Alice devolve o livro com ID 1
console.log(listarLivrosDisponiveis()); // Deve listar "O Senhor dos Anéis" e "1984" novamente
console.log(buscarLivro("senhor"));
console.log(buscarLivro("1984")); 