function getSubtotal(id, cart) {
  var subtotal = 0;

  cart.forEach(function (itemCart) {
    if (itemCart.id === id) {
      subtotal = itemCart.subtotal;
    }
  });

  return subtotal;
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

function appendCart(items, cart) {

  items.forEach(function (item) {
    if (getCount(item.id, cart) !== 0) {
      $('table').append(
        '<tr>' +
        '<td>' + item.name + '</td>' +
        '<td>' + item.price + '</td>' +
        '<td>' + item.unit + '</td>' +
        '<td id=' + item.id + '>' + getCount(item.id, cart) + '</td>' +
        '<td> ' + getSubtotal(item.id, cart) + '</td>' +
        '<td>' +
        '<button class="btn btn-warning btn-xs delete" data-attribute=' + item.id + '><span class="glyphicon glyphicon-remove"></span></button> ' +
        '<button class="btn btn-success btn-xs minus"  data-attribute=' + item.id + '><span class="glyphicon glyphicon-minus"></span></button> ' +
        '<button class="btn btn-success btn-xs plus"  data-attribute=' + item.id + '><span class="glyphicon glyphicon-plus"></span></button>' +
        '</td>' +
        '</tr>')
    }
  })
}

function checkoutButton() {
  $("#checkoutButton").click(function () {

  })
}


appendCart(JSON.parse(getData("items")), JSON.parse(getData("cart")));


addButton();
minusButton();
deleteButton();
