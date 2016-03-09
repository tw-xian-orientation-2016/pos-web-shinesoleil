function appendCart() {

  items.forEach(function (item) {
    $('table').append(
      '<tr>' +
      '<td>' + item.name + '</td>' +
      '<td>' + item.price + '</td>' +
      '<td>' + item.unit + '</td>' +
      '<td>0</td>' +
      '<td>0</td>' +
      '<td>' +
      '<button class="btn btn-warning btn-xs"><span class="glyphicon glyphicon-remove"></span></button> ' +
      '<button class="btn btn-success btn-xs"><span class="glyphicon glyphicon-minus"></span></button> ' +
      '<button class="btn btn-success btn-xs"><span class="glyphicon glyphicon-plus"></span></button>' +
      '</td>' +
      '</tr>')
  })

}

appendCart();
