$(document).ready(function() {
  var menu = [
    {
      id: 1,
      category: "meals",
      name: "Cheeseburger meal",
      price: 5.0
    },
    {
      id: 2,
      category: "meals",
      name: "Floor burger meal",
      price: 7.0
    },
    {
      id: 3,
      category: "meals",
      name: "Chicken burger meal",
      price: 6.0
    },
    {
      id: 4,
      category: "meals",
      name: "Kids burger meal",
      price: 4.5
    },
    {
      id: 5,
      category: "burgers",
      name: "Cheeseburger",
      price: 3.0
    },
    {
      id: 6,
      category: "burgers",
      name: "Floor burger",
      price: 5.0
    },
    {
      id: 7,
      category: "burgers",
      name: "Chicken burger",
      price: 4.0
    },
    {
      id: 8,
      category: "burgers",
      name: "Kids burger",
      price: 2.5
    },
    {
      id: 9,
      category: "salads",
      name: "Chicken salad",
      price: 5.0
    },
    {
      id: 10,
      category: "salads",
      name: "Tuna salad",
      price: 6.0
    },
    {
      id: 11,
      category: "salads",
      name: "Vegan salad",
      price: 5.5
    },
    {
      id: 11,
      category: "side dishes",
      name: "French fries",
      price: 2.0
    },
    {
      id: 12,
      category: "side dishes",
      name: "Chicken nuggets",
      price: 3.0
    },
    {
      id: 13,
      category: "drinks",
      name: "Soda",
      price: 1.0
    },
    {
      id: 14,
      category: "drinks",
      name: "Juice",
      price: 1.0
    },
    {
      id: 15,
      category: "drinks",
      name: "Water",
      price: 1.0
    },
    {
      id: 16,
      category: "desserts",
      name: "Ice cream",
      price: 2.0
    },
    {
      id: 17,
      category: "desserts",
      name: "Pancake",
      price: 3.5
    }
  ];

  var cart = [];
  var totalPrice = 0;

  $("#menu li").click(function() {
    switch (this.id) {
      case "meals":
        console.log("meals");
        var meals = menu.filter(function(obj) {
          return obj.category == "meals";
        });

        $("#sub-menu-title").text("Meals");

        listSubMenu(meals, addToCart);
        break;

      case "burgers":
        console.log("burgers");
        var burgers = menu.filter(function(obj) {
          return obj.category == "burgers";
        });
        $("#sub-menu-title").text("Burgers");
        listSubMenu(burgers, addToCart);
        break;
      case "salads":
        console.log("salads");
        var salads = menu.filter(function(obj) {
          return obj.category == "salads";
        });
        $("#sub-menu-title").text("Salads");
        listSubMenu(salads, addToCart);
        break;

      case "side-dishes":
        console.log("side-dishes");
        var sideDishes = menu.filter(function(obj) {
          return obj.category == "side dishes";
        });
        $("#sub-menu-title").text("Side dishes");
        listSubMenu(sideDishes, addToCart);
        break;

      case "drinks":
        console.log("drinks");
        var drinks = menu.filter(function(obj) {
          return obj.category == "drinks";
        });
        $("#sub-menu-title").text("Drinks");
        listSubMenu(drinks, addToCart);
        break;

      case "desserts":
        console.log("desserts");
        var desserts = menu.filter(function(obj) {
          return obj.category == "desserts";
        });
        $("#sub-menu-title").text("Desserts");
        listSubMenu(desserts, addToCart);
        break;

      default:
        console.log("click > /dev/null");
    }
  });

  function addToCart(id) {
    console.log("cart", id);
    $("#cart-title").text("Cart");

    var item = menu.filter(function(obj) {
      return obj.id == id;
    });

    console.log(item);
    console.log(cart);
    cart.push(item[0]);
    console.log(cart);

    if (cart.length > 0) {
      $("#cart").empty();
      totalPrice = 0;
      for (var i = 0; i < cart.length; i++) {
        $("#cart").append(
          '<div class="cart-item" id="' +
            cart[i].id +
            '">' +
            '<div class="item-name col-md-8">' +
            cart[i].name +
            "</div>" +
            '<div class="item-price col-md-4">' +
            cart[i].price +
            " euros </div>" +
            "</div>"
        );

        totalPrice += cart[i].price;

        $("#total-price").text("Total: " + totalPrice + " euros");
      }
      $("#empty-cart, #buy").show();
    }
  }

  $("#empty-cart").click(function() {
    cart = [];
    $("#total-price").text("Total: " + totalPrice + " euros");
    $("#cart").empty();
  });

  $("#buy").click(function() {
    cart = [];
    $("#sub-menu, #sub-menu-title, #cart, #cart-title, #total-price").empty();
    $("#empty-cart, #buy").hide();
    alert("Thanks for buying!");
  });

  function listSubMenu(menuItem, addToCart) {
    this.addToCart = addToCart;
    if (menuItem.length > 0) {
      $("#sub-menu").empty();
      for (var i = 0; i < menuItem.length; i++) {
        var subMenu = [];

        this.name = menuItem[i].name;

        $("#sub-menu").append(
          '<div class="sub-menu-item" id="' +
            menuItem[i].id +
            '"onclick="addToCart(this.id);">' +
            '<div class="item-name col-md-8">' +
            menuItem[i].name +
            "</div>" +
            '<div class="item-price col-md-4">' +
            menuItem[i].price +
            " euros </div>" +
            "</div>"
        );
        console.log(menuItem[i]);
      }
    }
  }
});
