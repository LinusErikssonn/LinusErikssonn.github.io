fetch("products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    localStorage.setItem("products", JSON.stringify(data));
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "[]");
    }
  });

let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));

function addItemToCart(productId) {
  let product = products.find(function (item) {
    return item.id == productId;
  });

  if (cart.length == 0) {
    cart.push(product);
  } else {
    let res = cart.find((element) => element.id == productId);
    if (res === undefined) {
      cart.push(product);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeItemFromCart(productId) {
  let tempCart = cart.filter((item) => item.id != productId);
  localStorage.setItem("cart", JSON.stringify(tempCart));
}

function updateQuantity(productId, quantity) {
  for (let product of cart) {
    if (product.id == productId) {
      product.quantity = quantity;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getTotal() {
  let temp = cart.map(function (item) {
    return parseInt(item.price);
  });

  let sum = temp.reduce(function (prev, next) {
    console.log("dsd" + prev + next);
    return prev + next;
  }, 0);
  console.log(sum);
}

var btn = document.getElementById("button1");
var btn2 = document.getElementById("button2");

var btn3 = document.getElementById("button3");
var btn4 = document.getElementById("button4");

var btn5 = document.getElementById("button5");
var btn6 = document.getElementById("button6");

btn.addEventListener("click", function () {
  addItemToCart(1);

  getTotal();
});

btn2.addEventListener("click", function () {
  removeItemFromCart(1);
  getTotal();
});

btn3.addEventListener("click", function () {
  addItemToCart(2);

  getTotal();
});

btn4.addEventListener("click", function () {
  removeItemFromCart(2);
  getTotal();
});

btn5.addEventListener("click", function () {
  addItemToCart(3);

  getTotal();
});

btn6.addEventListener("click", function () {
  removeItemFromCart(3);
  getTotal();
});
