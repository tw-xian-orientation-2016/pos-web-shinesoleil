function appendItems(items, receipt) {
  items.forEach(function (item) {
      if (getCount(item.id, receipt.cart) !== 0) {
        $('table').append(
          '<tr>' +
          '<td>' + item.name + '</td>' +
          '<td>' + item.price + '</td>' +
          '<td>' + item.unit + '</td>' +
          '<td>' + getCount(item.id, receipt.cart) + '</td>' +
          '<td>' + getSubtotal(item.id, receipt.cart) + '</td>' +
          '<td></td>' +
          '</tr>')
      }
    }
  );
  $('table').after(
    '<h4>Total: ' + calculateTotal(receipt.cart) + '</h4>' +
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

var receipts = JSON.parse(getData("receipts"));
var time = getData("time");
var receipt = getReceipt(time, receipts);
appendItems(JSON.parse(getData("items")), receipt);
