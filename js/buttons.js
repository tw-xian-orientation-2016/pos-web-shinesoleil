function getPrice(id, items) {
  var price;

  items.forEach(function (item) {
    if (item.id === id) {
      price = item.price;
    }
  });

  return price;
}

function addCount(id, items, cart) {
  cart.forEach(function (itemCart) {
    if (itemCart.id === id) {
      itemCart.count++;
      itemCart.subtotal += getPrice(id, items);
    }
  });

  return cart;
}

function addButton() {
  $(".plus").click(function () {
    var idItem = this.getAttribute("data-attribute");

    var cart = JSON.parse(getData("cart"));
    var items = JSON.parse(getData("items"));

    var newCart = addCount(idItem, items, cart);
    setData("cart", JSON.stringify(newCart));

  })
}

addButton();
