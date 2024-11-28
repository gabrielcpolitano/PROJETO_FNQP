const mockUser = [
    { id: 1, name: "Alana Silva", email: "alana@example.com" },
    { id: 2, name: "Julia Laura", email: "julia@example.com" }
];

const mockPost = [
    { id: 1, titulo: 'Titulo', corpo: 'Conteúdo do post 1...', userId: 1 },
    { id: 2, titulo: 'Titulo', corpo: 'Conteúdo do post 2...', userId: 1 },
    { id: 3, titulo: 'Titulo', corpo: 'Conteúdo do post 3...', userId: 2 },
    { id: 4, titulo: 'Titulo', corpo: 'Conteúdo do post 4...', userId: 2 }
];

async function fetchSimulatedUser(url) {
    console.log(`Simulando requisição para: ${url}`);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ok: true,
                json: () => Promise.resolve(mockUser)
            });
        }, 2000);
    });
}

async function fetchSimulatedPost(url) {
    console.log(`Simulando requisição para: ${url}`);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ok: true,
                json: () => Promise.resolve(mockPost)
            })
        }, 3000);
    })
}

async function getSimulatedUserData(userId) {
    const response = await fetchSimulatedUser("https://api.example.com/users");
    if (response.ok) {
        const data = await response.json();
        var user = data.find(user => user.id === userId);
        console.log("Dados simulados recebidos:", data);
        return user || Promise.reject("Usuário não encontrado.");
    }
}

async function getSimulatedPostUser(user) {
    const response = await fetchSimulatedPost("https://api.example.com/posts");
    if (response.ok) {
        const data = await response.json();
        var posts = data.filter(post => post.userId === user.id);
        return posts || Promise.reject("Posts para o usuário não encontrados.");
    }
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

document.getElementById('promise-btn').addEventListener('click', () => {
    getSimulatedUserData(1)
        .then(user => {
            displayUsers(user);
            return getSimulatedPostUser(user);
        }).then(posts => {
            displayPosts(posts);
        })
        .catch(error => alert(error));
});