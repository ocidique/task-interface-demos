$(document).ready(function() {
  var menu = [
    {
      id: 1,
      category: "meals",
      name: "Cheeseburger meal",
      price: 5.0,
      imgUrl: "cheeseburger-meal.png",
      class: "cheeseburger-meal"
    },
    {
      id: 2,
      category: "meals",
      name: "Double burger meal",
      price: 7.0,
      imgUrl: "double-burger-meal.png",
      class: "double-burger-meal"
    },
    {
      id: 3,
      category: "meals",
      name: "Chicken burger meal",
      price: 6.0,
      imgUrl: "chicken-burger-meal.png",
      class: "chicken-burger-meal"
    },
    {
      id: 4,
      category: "meals",
      name: "Small burger meal",
      price: 4.5,
      imgUrl: "small-burger-meal.png",
      class: "small-burger-meal"
    },
    {
      id: 5,
      category: "burgers",
      name: "Cheeseburger",
      price: 3.0,
      imgUrl: "cheeseburger.png",
      class: "cheeseburger"
    },
    {
      id: 6,
      category: "burgers",
      name: "Double burger",
      price: 5.0,
      imgUrl: "double-burger.png",
      class: "double-burger"
    },
    {
      id: 7,
      category: "burgers",
      name: "Chicken burger",
      price: 4.0,
      imgUrl: "chicken-burger.png",
      class: "chicken-burger"
    },
    {
      id: 8,
      category: "burgers",
      name: "Small burger",
      price: 2.5,
      imgUrl: "small-burger.png",
      class: "small-burger"
    },
    {
      id: 9,
      category: "salads",
      name: "Chicken salad",
      price: 5.0,
      imgUrl: "chicken-salad.png",
      class: "chicken-salad"
    },
    {
      id: 10,
      category: "salads",
      name: "Fish salad",
      price: 6.0,
      imgUrl: "fish-salad.png",
      class: "fish-salad"
    },
    {
      id: 11,
      category: "salads",
      name: "Vegan salad",
      price: 5.5,
      imgUrl: "vegan-salad.png",
      class: "vegan-salad"
    },
    {
      id: 12,
      category: "side dishes",
      name: "French fries",
      price: 2.0,
      imgUrl: "french-fries.png",
      class: "french-fries"
    },
    {
      id: 13,
      category: "side dishes",
      name: "Chicken legs",
      price: 3.0,
      imgUrl: "chicken-legs.png",
      class: "chicken-legs"
    },
    {
      id: 15,
      category: "drinks",
      name: "Soda",
      price: 1.0,
      imgUrl: "soda.png",
      class: "soda"
    },
    {
      id: 16,
      category: "drinks",
      name: "Juice",
      price: 1.0,
      imgUrl: "juice.png",
      class: "juice"
    },
    {
      id: 17,
      category: "drinks",
      name: "Water",
      price: 1.0,
      imgUrl: "water-bottle.png",
      class: "water-bottle"
    },
    {
      id: 18,
      category: "desserts",
      name: "Ice cream",
      price: 2.0,
      imgUrl: "ice-cream.png",
      class: "ice-cream"
    },
    {
      id: 19,
      category: "desserts",
      name: "Pancake",
      price: 3.5,
      imgUrl: "pancake.png",
      class: "pancake"
    }
  ];

  var startTime;
  var endTime;

  var cart = [];
  var totalPrice = 0;

  $("#menu li").click(function() {
    switch (this.id) {
      case "meals":
        console.log("meals");
        var meals = menu.filter(function(obj) {
          return obj.category == "meals";
        });

        $("#sub-menu-title").css(
          "background-image",
          "url(../../images/ubi-burgers/burger-meal.png)"
        );

        listSubMenu(meals, addToCart);
        break;

      case "burgers":
        console.log("burgers");
        var burgers = menu.filter(function(obj) {
          return obj.category == "burgers";
        });
        $("#sub-menu-title").css(
          "background-image",
          "url(../../images/ubi-burgers/burger.png)"
        );
        listSubMenu(burgers, addToCart);
        break;

      case "salads":
        console.log("salads");
        var salads = menu.filter(function(obj) {
          return obj.category == "salads";
        });
        $("#sub-menu-title").css(
          "background-image",
          "url(../../images/ubi-burgers/salad.png)"
        );
        listSubMenu(salads, addToCart);
        break;

      case "side-dishes":
        console.log("side-dishes");
        var sideDishes = menu.filter(function(obj) {
          return obj.category == "side dishes";
        });
        $("#sub-menu-title").css(
          "background-image",
          "url(../../images/ubi-burgers/french-fries.png)"
        );
        listSubMenu(sideDishes, addToCart);
        break;

      case "drinks":
        console.log("drinks");
        var drinks = menu.filter(function(obj) {
          return obj.category == "drinks";
        });
        $("#sub-menu-title").css(
          "background-image",
          "url(../../images/ubi-burgers/drinks.png)"
        );
        listSubMenu(drinks, addToCart);
        break;

      case "desserts":
        console.log("desserts");
        var desserts = menu.filter(function(obj) {
          return obj.category == "desserts";
        });
        $("#sub-menu-title").css(
          "background-image",
          "url(../../images/ubi-burgers/ice-cream.png)"
        );
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
          '<li class="cart-item   ' +
            cart[i].class +
            '" id="' +
            cart[i].id +
            '">' +
            '<div class="item-name col-sm-7"></div>' +
            '<div class="item-price col-sm-5">' +
            cart[i].price +
            " €</div>" +
            "</li>"
        );

        totalPrice += cart[i].price;

        $("#total-price").text(totalPrice + " €");
      }
      $("#empty-cart, #buy").show();
    }
  }

  $("#empty-cart").click(function() {
    cart = [];
    totalPrice = 0;
    $("#total-price").text(totalPrice + " €");
    $("#cart").empty();
  });

  $("#buy").click(function() {
    cart = [];
    $("#sub-menu, #sub-menu-title, #cart, #cart-title, #total-price").empty();
    $("#sub-menu-title").css("background-image", "");
    $("#empty-cart, #buy").hide();

    endTime = performance.now();
    var durationtime = endTime - startTime;
    var message =
      "Thanks for buying!\n" +
      "Starttime: " +
      startTime +
      "ms\n" +
      "Endtime: " +
      endTime +
      "ms\n" +
      "Duration: " +
      durationtime +
      "ms";
    alert(message);
  });

  function listSubMenu(menuItem, addToCart) {
    this.addToCart = addToCart;
    if (menuItem.length > 0) {
      $("#sub-menu").empty();
      for (var i = 0; i < menuItem.length; i++) {
        var subMenu = [];

        this.name = menuItem[i].name;

        $("#sub-menu").append(
          '<li class="sub-menu-item ' +
            menuItem[i].class +
            '" id="' +
            menuItem[i].id +
            '"onclick="addToCart(this.id);">' +
            '<div class="item-name col-sm-7"></div>' +
            '<div class="item-price col-sm-5">' +
            menuItem[i].price +
            " €</div>" +
            "</li>"
        );

        console.log(menuItem[i]);
      }
    }
  }

  function startTimer() {
    startTime = performance.now();
  }

  startTimer();
});
