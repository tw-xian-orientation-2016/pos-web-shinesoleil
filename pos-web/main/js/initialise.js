function initialiseItems() {
  var items = [
    {
      "id": "0",
      "name": "可口可乐",
      "unit": "瓶",
      "price": 3.00
    },
    {
      "id": "1",
      "name": "雪碧",
      "unit": "瓶",
      "price": 3.00
    },
    {
      "id": "2",
      "name": "苹果",
      "unit": "斤",
      "price": 5.50
    },
    {
      "id": "3",
      "name": "荔枝",
      "unit": "斤",
      "price": 15.00
    },
    {
      "id": "4",
      "name": "电池",
      "unit": "个",
      "price": 2.00
    },
    {
      "id": "5",
      "name": "方便面",
      "unit": "袋",
      "price": 4.50
    }
  ];

  setData("items", JSON.stringify(items));
}

function initialiseCart(items) {

  var cartItems = [];

  items.forEach(function (item) {
    cartItems.push({
      "id": item.id,
      "count": 0,
      "subtotal": 0
    });
  });

  setData("cart", JSON.stringify(cartItems));
}

function initialse() {
  initialiseItems();
  initialiseCart(JSON.parse(getData("items")));
}
