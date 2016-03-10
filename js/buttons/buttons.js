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

function deleteButton() {

  $(".delete").click(function () {
    var idItem = this.getAttribute("data-attribute");

    var cart = JSON.parse(getData("cart"));
    var items = JSON.parse(getData("items"));

    var newCart = clearCount(idItem, cart);
    $(this).parent().parent().remove();
    setData("cart", JSON.stringify(newCart));
  })
}

function detailButton() {
  $(".detail").click(function () {
    setData("time", this.id);
    window.location.href='receipt.html';
  })
}
