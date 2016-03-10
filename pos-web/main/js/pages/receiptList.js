function appendReceipt(receipts) {
  receipts.forEach(function (receipt) {
    $('table').append(
      '<tr>' +
      '<td>' + new Date(parseFloat(receipt.time)).toLocaleString() + '</td>' +
      '<td>' + receipt.total + '</td>' +
      '<td><button class="btn btn-success btn-xs detail" id=' + receipt.time + '><span class="glyphicon glyphicon-zoom-in"></span> Detail</button></td>' +
      '</tr>')
  })
}

$( document ).ready(function() {
  appendReceipt(JSON.parse(getData("receipts")));
  detailButton();
  backButton();
});
