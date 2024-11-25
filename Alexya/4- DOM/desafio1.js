function adicionarNovaTarefa() {
    let input = document.getElementById('taskTexto');

    if (!input.value.trim()) {
        alert('Digite algo para inserir na sua lista!');
        return;
    }
    let tasksFromStorage = JSON.parse(sessionStorage.getItem('tasks')) || [];
    let task = { texto: input.value, ativa: true };

    tasksFromStorage.push(task);
    sessionStorage.setItem('tasks', JSON.stringify(tasksFromStorage));
    input.value = '';
    listarTasks();
}

function listarTasks() {
    limparLista();
    let taskFiltradas = JSON.parse(sessionStorage.getItem('tasks')) || [];
    return document.getElementById('taskList').appendChild(adicionarListaNoDOM(taskFiltradas));
}

function pesquisarTask() {
    limparLista();
    let texto = document.getElementById('taskFilter').value;
    console.log(texto);
    let tasksFromStorage = JSON.parse(sessionStorage.getItem('tasks')) || [];

    let taskFiltradas = tasksFromStorage.filter(task => task.texto.includes(texto));

    console.log(taskFiltradas);
    return document.getElementById('taskList').appendChild(adicionarListaNoDOM(taskFiltradas));
}

function filtrarAtivas() {
    limparLista();
    let tasksFromStorage = JSON.parse(sessionStorage.getItem('tasks')) || [];
    let taskFiltradas = tasksFromStorage.filter(task => task.ativa === true);
    return document.getElementById('taskList').appendChild(adicionarListaNoDOM(taskFiltradas));
}

function filtrarConcluidas() {
    limparLista();
    let tasksFromStorage = JSON.parse(sessionStorage.getItem('tasks')) || [];
    let taskFiltradas = tasksFromStorage.filter(task => task.ativa === false);

    return document.getElementById('taskList').appendChild(adicionarListaNoDOM(taskFiltradas));
}

function adicionarListaNoDOM(array) {
    var list = document.createElement('ul');

    array.forEach((task, index) => {
        const item = document.createElement('li');
        item.textContent = task.texto;

        if (!task.ativa) {
            item.classList.add('concluida');
        }
        let concluiBtn = document.createElement('button');
        concluiBtn.textContent = 'Concluir';
        concluiBtn.style.marginLeft = '10px';
        concluiBtn.addEventListener('click', () => {
            task.ativa = !task.ativa;
            sessionStorage.setItem('tasks', JSON.stringify(array));
            listarTasks();
        });


        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.style.marginLeft = '10px';
        removeBtn.addEventListener('click', () => {
            removerTask(index);
        });

        item.appendChild(concluiBtn);
        item.appendChild(removeBtn);
        list.appendChild(item);
    });
    return list;
}

function limparLista() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}

function removerTask(index) {
    console.log(index)
    let tasksFromStorage = JSON.parse(sessionStorage.getItem('tasks')) || [];
    tasksFromStorage.splice(index, 1);
    sessionStorage.setItem('tasks', JSON.stringify(tasksFromStorage));
    listarTasks();
}