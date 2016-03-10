function appendCart(items, cart) {

  items.forEach(function (item) {
    if (getCount(item.id, cart) !== 0) {
      $('table').append(
        '<tr>' +
        '<td>' + item.name + '</td>' +
        '<td>' + item.price + '</td>' +
        '<td>' + item.unit + '</td>' +
        '<td name="count">' + getCount(item.id, cart) + '</td>' +
        '<td name="subtotal"> ' + getSubtotal(item.id, cart) + '</td>' +
        '<td>' +
        '<button class="btn btn-warning btn-xs delete" data-attribute=' + item.id + '><span class="glyphicon glyphicon-remove"></span></button> ' +
        '<button class="btn btn-success btn-xs minus"  data-attribute=' + item.id + '><span class="glyphicon glyphicon-minus"></span></button> ' +
        '<button class="btn btn-success btn-xs plus"  data-attribute=' + item.id + '><span class="glyphicon glyphicon-plus"></span></button>' +
        '</td>' +
        '</tr>')
    }
  })
}

$( document ).ready(function() {
  appendCart(JSON.parse(getData("items")), JSON.parse(getData("cart")));

  addButton();
  minusButton();
  deleteButton();
  checkoutButton();

});
