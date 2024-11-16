// Função para lidar com cliques nas tarefas (concluir ou excluir)

const entradaTarefa = document.getElementById('task-input')
const botaoAdicionarTarefa = document.getElementById('add-task-btn')
const listaTarefas = document.getElementById('task-list')
const botoesFiltro = document.querySelectorAll('.filters button')

// Função para adicionar uma nova tarefa

function adicionarTarefa() {

  // Remover espaços em branco do texto da tarefa

  const textoTarefa = entradaTarefa.value.trim()

  // Verificar se o campo de entrada está vazio

  if (textoTarefa === '') {
    alert('Por favor, insira uma tarefa!')
    return
  }

  // Cria um novo item de tarefa

  const itemTarefa = document.createElement('li')
  itemTarefa.classList.add('item-tarefa')
  itemTarefa.innerHTML = `
      <span class="texto-tarefa">${textoTarefa}</span>
      <button class= "botao-completar">✓</button>
      <button class= "botao-excluir">✗</button>
  `

  // Adiciona o item na lista

  listaTarefas.appendChild(itemTarefa)

  // Limpa o campo de entrada

  entradaTarefa.value = ''
  entradaTarefa. focus()
}

// Funcao para lidar com cliques nas tarefas (concluir ou excluir)

function manipularCliqueTarefa(e){
  const elemento = e.target

  // Verificar se o botao de completar foi clicado
  
  if (elemento.classList.contains(`botao-completar`)) {
    const itemTarefa = elemento.parentElement
    itemTarefa.classList.toggle(`concluida`)
  }

  // Verificar se o botao de excluir foi clicado

  if (elemento.classList.contains(`botao-excluir`)) {
    const itemTarefa = elemento.parentElement
    itemTarefa.remover()
  }
}