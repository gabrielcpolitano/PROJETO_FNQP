// Dados de LIVROS
let listadelivros = [
  {
    id: 1,
    titulo: 'Novo Livro',
    autor: 'Gabriel Politano',
    genero: 'Auto-Biografia',
    anoPublicacao: '2024',
    disponivel: true,
  }
];

// Adicionar Livros
function adicionarLivro(titulo, autor, genero, anoPublicacao, disponivel) {
  const novoId =  listadelivros.length > 0
   ? Math.max(...listadelivros.map(livro => livro.id)) + 1 
   : 1;

  const novoLivro = {
    id: novoId,
    titulo,
    autor,
    genero,
    anoPublicacao,
    disponivel
  }

  listadelivros.push(novoLivro);
  console.log(`Livro "${titulo}" adicionado com sucesso!`);
}

adicionarLivro('O Mistério do Oceano', 'Júlia Ribeiro', 'Suspense', '2021', true);
console.log(listadelivros);


// Dados USUARIOS
let listaDeUsuarios = [
  {
    id: 1,
    nome: 'João Silva',
    email: 'joao.silva@example.com',
    idade: 30
  }
];


// Adicionar Usuários
function adicionarUsuario(nome, email, idade) {
  const novoId = listaDeUsuarios.length > 0
    ? Math.max(...listaDeUsuarios.map(usuario => usuario.id)) + 1
    : 1;

  const novoUsuario = {
    id: novoId,
    nome,
    email,
    idade
  }

  listaDeUsuarios.push(novoUsuario)
  console.log(`Usuário "${nome}" adicionado com sucesso!`)
}

adicionarUsuario('Ana Costa', 'ana.costa@example.com', 28);
console.log(listaDeUsuarios);