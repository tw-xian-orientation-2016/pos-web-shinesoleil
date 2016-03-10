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

function clearCount(id, cart) {
  cart.forEach(function (itemCart) {
    if (itemCart.id === id) {
      itemCart.count = 0;
      itemCart.subtotal = 0;
    }
  });

  return cart;
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

function calculateTotal(cart) {
  var total = 0;

  cart.forEach(function (itemCart) {
    total += itemCart.subtotal;
  });

  return total;
}

function getTime() {
  return new Date().getTime();
}

function getReceipt(time, receipts) {
  var res;

  receipts.forEach(function (receipt) {
    if (receipt.time === time) {
      res = receipt;
    }
  });

  return res;
}
