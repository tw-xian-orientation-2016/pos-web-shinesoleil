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

function appendItems(items, cart) {
  items.forEach(function (item) {
      if (getCount(item.id, cart) !== 0) {
        $('table').append(
          '<tr>' +
          '<td>' + item.name + '</td>' +
          '<td>' + item.price + '</td>' +
          '<td>' + item.unit + '</td>' +
          '<td>' + getCount(item.id, cart) + '</td>' +
          '<td>' + getSubtotal(item.id, cart) + '</td>' +
          '<td></td>' +
          '</tr>')
      }
    }
  )
}

appendItems(JSON.parse(getData("items")), JSON.parse(getData("cart")));
