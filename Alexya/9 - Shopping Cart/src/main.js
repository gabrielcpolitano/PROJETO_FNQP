let basket = JSON.parse(localStorage.getItem("carrinho")) || [];
let shop = document.getElementById("shop");

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((item) => {
      let { id, name, price, desc, img } = item;

      let search = basket.find((search) => search.id === id);
    
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
                        ${search === undefined ? 0 : search.item}
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
  let basketItem = basket.find((search) => search.id === selectedItem.id);
  if (basketItem === undefined) {
    basket.push({ id: selectedItem.id, item: 1 });
  } else {
    basketItem.item += 1;
  }

  update(selectedItem);
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

  localStorage.setItem("carrinho", JSON.stringify(basket));
};

let update = (itemId) => {
  let selectedItem = itemId.id;
  let searchOnBasket = basket.find((x) => x.id === selectedItem);
  document.getElementById(selectedItem).innerHTML = searchOnBasket?.item
    ? searchOnBasket?.item
    : 0;
  basketSum();
};

let basketSum = () => {
  let cartIcon = document.getElementById("cartAmount");

  cartIcon.innerHTML = basket
    .map((basketItem) => basketItem?.item)
    .reduce((x, y) => x + y, 0);
};

basketSum();