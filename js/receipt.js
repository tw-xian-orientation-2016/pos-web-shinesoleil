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
  );
  $('table').after(
    '<h4>Total: ' + calculateTotal(cart) + '</h4>' +
    '<h4>Time: ' + getTime() + '</h4>'
  )
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

appendItems(JSON.parse(getData("items")), JSON.parse(getData("cart")));
