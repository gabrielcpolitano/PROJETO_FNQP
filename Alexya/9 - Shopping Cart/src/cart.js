let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("carrinho")) || [];

let basketSum = () => {
  let cartIcon = document.getElementById("cartAmount");

  cartIcon.innerHTML = basket
    .map((basketItem) => basketItem?.item)
    .reduce((x, y) => x + y, 0);
};

basketSum();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;

        let search = shopItemsData.find((y) => y.id === id.toString()) || [];
        let {img, price, name} = search;
        let total = item * price;
        return `
            <div class="cart-item">
                <img width="100" src=${img} alt=""/>
                <div class="details">
                    <div class="title-price-x">
                        <h4 class="title-price">
                            <p>${name}</p>
                            <p class="cart-item-price">$ ${price}</p>
                        </h4>
                        <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                    </div>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>

                    <h3>$ ${total}</h3>
                </div>
            </div>
            `;
      })
      .join(""));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `    
        <h2>Cart is Empty</h2>
        <a href="index.html">
            <button class="HomeBtn">Back to home</button>
        </a>`;
  }
};

generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let basketItem = basket.find((search) => search.id === selectedItem.id);

  if (basketItem === undefined) {
    basket.push({ id: selectedItem.id, item: 1 });
  } else {
    basketItem.item += 1;
  }

  update(selectedItem);
  generateCartItems();

  localStorage.setItem("carrinho", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let basketItem = basket.find((search) => search.id === selectedItem.id);

  if (basketItem === undefined) return;
  if (basketItem.item === 0) return;
  else {
    basketItem.item -= 1;
  }

  update(selectedItem);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("carrinho", JSON.stringify(basket));
};

let update = (itemId) => {
  let searchOnBasket = basket.find((x) => x.id === itemId.id);

  document.getElementById(itemId.id).innerHTML = searchOnBasket?.item
    ? searchOnBasket?.item
    : 0;
  basketSum();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  localStorage.setItem("carrinho", JSON.stringify(basket));
  generateCartItems();
  TotalAmount();
  basketSum();
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id.toString()) || [];
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    label.innerHTML = `
      <h2>Total Bill: $ ${amount}</h2>
      <button class="checkout">Checkout</button>
      <button onclick="clearCart()" class="removeAll">Clear All   </button>
      `;
  } else return;
};

TotalAmount();

let clearCart = () => {
    basket = [];
    generateCartItems();
  localStorage.setItem("carrinho", JSON.stringify(basket));
  basketSum();
};
