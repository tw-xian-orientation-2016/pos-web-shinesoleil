function checkoutButton() {
  $("#checkoutButton").click(function () {

    var receipts;

    if(getData("receipts") !== null) {
      receipts = JSON.parse(getData("receipts"));
    } else {
      receipts = [];
    }

    var cart = JSON.parse(getData("cart"));
    var items = JSON.parse(getData("items"));
    var time = getTime().toString();

    receipts.push({
      "cart": cart,
      "time": time,
      "total": calculateTotal(cart)
    });

    setData("receipts", JSON.stringify(receipts));

    clearData("cart");

    setData("time", time);

    window.location.href='receipt.html';
  })
}
