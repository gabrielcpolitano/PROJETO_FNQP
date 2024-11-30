// Funcao para buscar os dados de usuario de uma API real
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Falha ao carregar os dados');
  }
  return response.json(); // Retorna os dados em formato JSON
}

// Funcao para carregar os dados e exibi-los na pagina
async function loadUsers() {
  const userList = document.getElementById('userList');
  
}