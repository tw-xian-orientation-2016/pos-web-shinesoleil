function appendItems(items, cart) {

  items.forEach(function (item) {
    $('table').append(
      '<tr>' +
      '<td>' + item.name + '</td>' +
      '<td>' + item.price + '</td>' +
      '<td>' + item.unit + '</td>' +
      '<td name="count">' + getCount(item.id, cart) + '</td>' +
      '<td>' +
      '<button class="btn btn-warning btn-xs minus" data-attribute=' + item.id + '><span class="glyphicon glyphicon-minus"></span></button> ' +
      '<button class="btn btn-success btn-xs plus" data-attribute=' + item.id + '><span class="glyphicon glyphicon-plus"></span></button>' +
      '</td>' +
      '</tr>')
  })
}


$( document ).ready(function() {
  if (getData("items") === null) {
    initialse();
  }

  if(getData("cart") === null) {
    initialse();
  }

  appendItems(JSON.parse(getData("items")), JSON.parse(getData("cart")));

  addButton();
  minusButton();
});

