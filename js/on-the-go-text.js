$(document).ready(function() {
  var tranportationType;
  var minAmountOfTickets = 1;
  var amountOfTickets = 1;
  var ticketPrice = 6.80;
  var totalPrice = ticketPrice;
  var departureInterval = 20;
  var currentDepartureInterval = 20;
  var today = moment(new Date());
  var currentTime = today.format("hh:mm A");
  var initialDeparture = currentDeparture();
  var currentDeparture = currentDeparture();

  $("button").click(function() {
    switch (this.id) {
      case "bus":
      case "train":
        tranportationType = this.id;
        $("#step-1").hide();
        $("#step-2").show();
        $("#tranportation-type").text(tranportationType);
        break;

      case "less":
        if (amountOfTickets == 1) {
          amountOfTickets = minAmountOfTickets;
        } else {
          amountOfTickets -= minAmountOfTickets;
          totalPrice = calcPrice(amountOfTickets);
        }
        $("#amount").text(amountOfTickets);
        $("#total-price").text(totalPrice);

        break;
      case "more":
        if (amountOfTickets >= 1) {
          amountOfTickets += minAmountOfTickets;
          totalPrice = calcPrice(amountOfTickets);
        }
        $("#amount").text(amountOfTickets);
        $("#total-price").text(totalPrice);
        break;

      case "previous-departure":
        if (currentDepartureInterval == 20) {
          currentDepartureInterval = departureInterval;
        } else {
          currentDepartureInterval -= departureInterval;
          currentDeparture = moment(currentDeparture)
            .subtract(departureInterval, "minutes")
            .format();
        }

        $("#current-departure").text(currentDepartureTime(currentDeparture));
        $("#departure").text(currentDepartureTime(currentDeparture));
        $("#arrival").text(arrivalTime(currentDeparture));
        break;

      case "next-departure":
        if (currentDepartureInterval >= 20) {
          currentDepartureInterval += departureInterval;
          currentDeparture = moment(currentDeparture)
            .add(departureInterval, "minutes")
            .format();
        }

        $("#current-departure").text(currentDepartureTime(currentDeparture));
        $("#departure").text(currentDepartureTime(currentDeparture));
        $("#arrival").text(arrivalTime(currentDeparture));

        break;

      case "cancel":
        $("#step-2").hide();
        $("#step-3").hide();
        $("#step-1").show();
        reset();
        break;

      case "confirm":
        $("#step-2").hide();
        $("#step-3").show();
        $("#confirm-tickets").text(amountOfTickets);
        $("#confirm-price").text(totalPrice);
        $("#confirm-departure").text(currentDepartureTime(currentDeparture));
        break;

      case "buy":
        $("#step-3").hide();
        $("#step-4").show();
        reset();
        break;

      case "back-to-start":
        $("#step-4").hide();
        $("#step-1").show();
        reset();
        break;

      default:
        console.log("click > /dev/null");
    }
  });

  (function() {
    $("#current-time").text(currentTime);

    var cdt = currentDepartureTime(currentDeparture);
    $("#current-departure").text(cdt);
    $("#departure").text(cdt);
    $("#arrival").text(arrivalTime(currentDeparture));
  })();

  function calcPrice(amountOfTickets) {
    return parseFloat(amountOfTickets * ticketPrice).toFixed(2);
  }

  function currentDeparture() {
    var remainder = 20 - today.minute() % 20;
    return moment(today)
      .add(remainder, "minutes")
      .format();
  }

  function currentDepartureTime(currentDeparture) {
    var cd = moment(currentDeparture);
    var remainder = 20 - cd.minute() % 20;
    return moment(cd)
      .add(remainder, "minutes")
      .format("hh:mm A");
  }

  function arrivalTime(currentDeparture) {
    return moment(currentDeparture)
      .add(departureInterval * 2, "minutes")
      .format("hh:mm A");
  }

  function reset() {
    totalPrice = ticketPrice;
    amountOfTickets = minAmountOfTickets;

    $("#total-price").text(totalPrice);
    $("#amount").text(amountOfTickets);

    $("#current-departure").text(currentDepartureTime(initialDeparture));
    $("#departure").text(currentDepartureTime(initialDeparture));
    $("#arrival").text(arrivalTime(initialDeparture));
  }
});
