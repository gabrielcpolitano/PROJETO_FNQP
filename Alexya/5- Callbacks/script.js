// (Usando Callbacks)
// Dados simulados
const usersData = [
    { id: 1, name: 'Alana Silva', email: 'alana@example.com' },
    { id: 2, name: 'Julia Laura', email: 'julia@example.com' }
];

const posts = [
    { id: 1, titulo: 'Titulo', corpo: 'Conteúdo do post 1...', userId: 1 },
    { id: 2, titulo: 'Titulo', corpo: 'Conteúdo do post 2...', userId: 1 },
    { id: 3, titulo: 'Titulo', corpo: 'Conteúdo do post 3...', userId: 2 },
    { id: 4, titulo: 'Titulo', corpo: 'Conteúdo do post 4...', userId: 2 }
];

function obterUsuarioCallback(id, callback) {
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        console.log('Obtendo usuário...');
        document.getElementById('loading').style.display = 'none';
        const user = usersData.find(user => user.id === id);
        if (user) {
            callback(user);
        } else {
            alert('Usuário não encontrado (Callback).');
        }
    }, 2000);
}

function obterPostsUsuario(usuario, callback) {
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        console.log(`Obtendo posts de ${usuario.name}`);

        document.getElementById('loading').style.display = 'none';
        const usersPosts = posts.filter(post => post.userId === usuario.id);
        if (usersPosts.length > 0) {
            callback(usersPosts);
        } else {
            alert('Nenhum post encontrado (Callback).');
        }

    }, 3000);
}

function displayUsers(user) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = `${user.name} - ${user.email}`;
    userList.appendChild(li);
};

function displayPosts(posts) {
    const userList = document.getElementById('user-list');
    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = `${post.titulo} - ${post.corpo}`;
        userList.appendChild(li);
    });
}

document.getElementById('callback-btn').addEventListener('click', () => {
    obterUsuarioCallback(2, user => {
        displayUsers(user);
        obterPostsUsuario(user, posts => displayPosts(posts));
    });
});

// (Usando Promises)
function fetchUsersWithPromise(userId) {
    return new Promise((resolve, reject) => {
        document.getElementById('loading').style.display = 'block';
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            const user = usersData.find(user => user.id === userId)
            if (user) {
                resolve(user);
            } else {
                reject('Nenhum usuario encontrado  (Promise).');
            }
        }, 2000);
    });
}
function fetchPostWithPromise(userId) {
    return new Promise((resolve, reject) => {
        document.getElementById('loading').style.display = 'block';
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            const usersPosts = posts.filter(post => post.userId === userId);
            if (usersPosts.length > 0) {
                resolve(usersPosts);
            } else {
                reject('Nenhum post encontrado  (Promise).');
            }
        }, 2000);
    });
}

document.getElementById('promise-btn').addEventListener('click', () => {
    fetchUsersWithPromise(1)
        .then(user => {
            displayUsers(user);;
            return fetchPostWithPromise(user.id)
        }).then(posts => {
            displayPosts(posts)
        })
        .catch(error => alert(error));
});
