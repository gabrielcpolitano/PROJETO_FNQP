// Obtém o elemento HTML onde os itens da loja serão exibidos
let shop = document.getElementById("shop");

// Dados dos produtos da loja
const shopItemsData = [
  {
    id: "1", // ID único do produto
    name: "Casual Shirt", // Nome do produto
    price: 45, // Preço do produto
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", // Descrição do produto
    img: "images/img-1.jpg", // Caminho da imagem do produto
  },
  {
    id: "2",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-2.jpg",
  },
  {
    id: "3",
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-3.jpg",
  },
  {
    id: "4",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-4.jpg",
  },
];

// Carrega os dados do carrinho de compras armazenados no Local Storage ou inicializa um array vazio
let basket = JSON.parse(localStorage.getItem("data")) || [];

// Função para gerar a interface da loja dinamicamente
let generateShop = () => {
  // Adiciona os itens da loja ao elemento HTML usando um mapa para iterar pelos dados dos produtos
  return (shop.innerHTML = shopItemsData
    .map((item) => {
      let { id, name, price, desc, img } = item; // Desestruturação para acessar os atributos do item
      // Verifica se o produto já está no carrinho e obtém sua quantidade
      let search = basket.find((b) => b.id === id) || {};
      return `
        <div id=product-id-${id} class="item">
            <img width="220" src=${img} alt=""> <!-- Imagem do produto -->
            <div class="details">
                <h3>${name}</h3> <!-- Nome do produto -->
                <p>${desc}</p> <!-- Descrição do produto -->
                <div class="price-quantity">
                    <h2>$ ${price}</h2> <!-- Preço do produto -->
                    <div class="buttons">
                        <!-- Botões para incrementar e decrementar a quantidade do produto no carrinho -->
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">
                            ${search.id === undefined ? 0 : search.item} <!-- Quantidade atual do produto -->
                        </div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
      `;
    })
    .join("")); // Combina os elementos do array gerado em uma string única
};

// Chama a função para gerar a interface da loja
generateShop();

// Função para incrementar a quantidade de um item no carrinho
let increment = (id) => {
  let selectedItem = id; // ID do item selecionado
  let basketItem = basket.find((search) => search.id === selectedItem); // Procura o item no carrinho

  if (basketItem === undefined) {
    // Se o item não estiver no carrinho, adiciona um novo objeto com quantidade inicial 1
    basket.push({ id: selectedItem, item: 1 });
  } else {
    // Se o item já estiver no carrinho, incrementa a quantidade
    basketItem.item += 1;
  }

  update(selectedItem); // Atualiza a exibição da quantidade no frontend

  // Salva o carrinho atualizado no Local Storage
  localStorage.setItem("data", JSON.stringify(basket));
};

// Função para decrementar a quantidade de um item no carrinho
let decrement = (id) => {
  let selectedItem = id;
  let basketItem = basket.find((search) => search.id === selectedItem);

  if (basketItem === undefined || basketItem.item === 0) return; // Se o item não estiver no carrinho ou a quantidade já for 0, não faz nada
  else {
    basketItem.item -= 1; // Decrementa a quantidade
  }

  // Remove o item do carrinho se a quantidade chegar a 0
  basket = basket.filter((x) => x.item !== 0);
  update(selectedItem); // Atualiza a exibição da quantidade no frontend

  // Salva o carrinho atualizado no Local Storage
  localStorage.setItem("data", JSON.stringify(basket));
};

// Função para atualizar a quantidade de um item no frontend
let update = (itemId) => {
  let searchOnBasket = basket.find((item) => item.id === itemId);
  document.getElementById(itemId).innerHTML = searchOnBasket?.item
    ? searchOnBasket?.item
    : 0; // Atualiza o elemento HTML com a nova quantidade ou 0 se o item não estiver no carrinho
  basketSum(); // Atualiza a soma total do carrinho
};

// Função para calcular e exibir o total de itens no carrinho
let basketSum = () => {
  localStorage.setItem("data", JSON.stringify(basket)); // Atualiza o Local Storage
  let cartIcon = document.getElementById("cartAmount"); // Obtém o elemento do ícone do carrinho
  let sum = basket
    .map((basketItem) => basketItem?.item) // Obtém as quantidades de cada item
    .reduce((x, y) => x + y, 0); // Soma todas as quantidades
  cartIcon.innerHTML = sum; // Exibe a soma no ícone do carrinho
};

// Chama a função para exibir a soma inicial dos itens no carrinho
basketSum();

// Executa essas funções automaticamente ao carregar a página
window.onload = () => {
  generateShop();
  basketSum(); // Atualiza o contador no ícone do carrinho
};
