function getPrice(id, items) {
  var price;

  items.forEach(function (item) {
    if (item.id === id) {
      price = item.price;
    }
  });

  return price;
}

function getCount(id, cart) {
  var count = 0;

  cart.forEach(function (itemCart) {
    if (itemCart.id === id) {
      count = itemCart.count;
    }
  });

  return count;
}

function getSubtotal(id, cart) {
  var subtotal = 0;

  cart.forEach(function (itemCart) {
    if (itemCart.id === id) {
      subtotal = itemCart.subtotal;
    }
  });

  return subtotal;
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
    var newCount = getCount(idItem, newCart);
    var newSubtotal = getSubtotal(idItem, newCart);

    $(this).parent().siblings('[name="count"]').text(newCount);
    $(this).parent().siblings('[name="subtotal"]').text(newSubtotal);

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
    var newCount = getCount(idItem, newCart);
    var newSubtotal = getSubtotal(idItem, newCart);


    $(this).parent().siblings('[name="count"]').text(newCount);
    $(this).parent().siblings('[name="subtotal"]').text(newSubtotal);

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
    var idItem = this.getAttribute("data-attribute");

    var cart = JSON.parse(getData("cart"));
    var items = JSON.parse(getData("items"));

    var newCart = clearCount(idItem, items, cart);
    $(this).parent().parent().remove();
    setData("cart", JSON.stringify(newCart));
  })
}


addButton();
minusButton();
