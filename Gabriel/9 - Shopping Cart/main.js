let shop = document.getElementById("shop");

const shopItemsData = [
  {
    id: "1",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-1.jpg",
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

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((item) => {
      let { id, name, price, desc, img } = item;
      let search = basket.find((b) => b.id === id) || {};
      return `
    <div id=product-id-${id} class="item">
            <img width="220" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc} </p>
                <div class="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">
                            ${search.id === undefined ? 0 : search.item}
                        </div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let basketItem = basket.find((search) => search.id === selectedItem);

  if (basketItem === undefined) {
    basket.push({ id: selectedItem, item: 1 }); //todo: item deve ser Quantidade (?)
  } else {
    basketItem.item += 1;
  }

  update(selectedItem);

  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let basketItem = basket.find((search) => search.id === selectedItem);

  if (basketItem === undefined || basketItem.item === 0) return;
  else {
    basketItem.item -= 1;
  }

  basket = basket.filter((x) => x.item !== 0);
  update(selectedItem);

  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (itemId) => {
  let searchOnBasket = basket.find((item) => item.id === itemId);
  document.getElementById(itemId).innerHTML = searchOnBasket?.item
    ? searchOnBasket?.item
    : 0;
  basketSum();
};

let basketSum = () => {
  localStorage.setItem("data", JSON.stringify(basket));
  let cartIcon = document.getElementById("cartAmount");
  let sum = basket
    .map((basketItem) => basketItem?.item)
    .reduce((x, y) => x + y, 0);
  cartIcon.innerHTML = sum;
};

basketSum();

window.onload = () => {
  generateShop();
  basketSum(); // Atualiza o contador no ícone do carrinho.
};
