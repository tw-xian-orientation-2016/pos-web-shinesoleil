function deleteButton() {
  $(".delete").click(function () {
    var idItem = this.getAttribute("data-attribute");

    var cart = JSON.parse(getData("cart"));
    var items = JSON.parse(getData("items"));

    var newCart = clearCount(idItem, cart);
    $(this).parent().parent().remove();
    setData("cart", JSON.stringify(newCart));
  })
}
