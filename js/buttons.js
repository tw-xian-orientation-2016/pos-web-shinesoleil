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

      $('#' + id + '').html(itemCart.count);
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

function minusCount(id, items, cart) {
  cart.forEach(function (itemCart) {
    if (itemCart.id === id && itemCart.count > 0) {
      itemCart.count--;
      itemCart.subtotal -= getPrice(id, items);

      $('#' + id + '').html(itemCart.count);
    }
  });

  return cart;
}

function minusButton() {

  $(".minus").click(function () {
    var idItem = this.getAttribute("data-attribute");

    var cart = JSON.parse(getData("cart"));
    var items = JSON.parse(getData("items"));

    var newCart = minusCount(idItem, items, cart);
    setData("cart", JSON.stringify(newCart));


  })
}

function clearCount(id, items, cart) {
  cart.forEach(function (itemCart) {
    if (itemCart.id === id) {
      itemCart.count = 0;
      itemCart.subtotal = 0;

    }
  });

  return cart;
}

function deleteButton() {

  $(".delete").click(function () {
    console.log("clicked");
    var idItem = this.getAttribute("data-attribute");
    console.log(idItem);

    var cart = JSON.parse(getData("cart"));
    var items = JSON.parse(getData("items"));

    var newCart = clearCount(idItem, items, cart);
    console.log(newCart);
    setData("cart", JSON.stringify(newCart));
  })
}


addButton();
minusButton();
