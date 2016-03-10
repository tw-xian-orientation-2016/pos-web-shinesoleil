describe('minus test', function () {
  it('minus count and subtotal test', function () {
    var id = '2';
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
    var cart = [
      {"id": "0", "count": 3, "subtotal": 9},
      {"id": "1", "count": 0, "subtotal": 0},
      {"id": "2", "count": 2, "subtotal": 11},
      {"id": "3", "count": 0, "subtotal": 0},
      {"id": "4", "count": 1, "subtotal": 2},
      {"id": "5", "count": 0, "subtotal": 0}
    ];

    var newCart = [
      {"id": "0", "count": 3, "subtotal": 9},
      {"id": "1", "count": 0, "subtotal": 0},
      {"id": "2", "count": 1, "subtotal": 5.5},
      {"id": "3", "count": 0, "subtotal": 0},
      {"id": "4", "count": 1, "subtotal": 2},
      {"id": "5", "count": 0, "subtotal": 0}
    ];

    expect(minusCountSubtotal(id, items, cart)).toEqual(newCart)
  });

});
