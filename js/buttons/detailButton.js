function detailButton() {
  $(".detail").click(function () {
    setData("time", this.id);
    window.location.href='receipt.html';
  })
}
