let shoppingCart = [];
let products = document.getElementsByTagName("button");

for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", function (event) {
    let product = event.target.parentNode.getAttribute("data-product");

    shoppingCart.includes(product)
      ? alert("Book already in basket")
      : shoppingCart.push(product);

    updateCart();
  });
}

function updateCart() {
  let cartProducts = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    cartProducts +=
      `<li><span class="product-title">Titel: </span>` +
      shoppingCart[i] +
      `</li>`;
  }

  document.getElementById("products").innerHTML = cartProducts;
  listProductsInCart();
}

function listProductsInCart() {
  document.getElementById("productsInCart").innerHTML = shoppingCart.length;
}

listProductsInCart();

document.getElementById("open-cart").addEventListener("click", function () {
  document.getElementById("cart").classList.toggle("hide");
});
