//business logic
function Pizza(size, sauce, cheese, toppings) {
  debugger;
  this.sizeChoice = size;
  this.sauceChoice = sauce;
  this.cheeseChoice = cheese;
  this.toppingsChoice = toppings;
}

Pizza.prototype.cost = function() {
  debugger;
  var calculate = this.sizeChoice + this.sauceChoice + this.cheeseChoice + this.toppingsChoice;
  return calculate;
}

//user interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    debugger;
    $("#output").empty();
    var sizeChoice = parseInt($("#size").val());
    var sauceChoice = parseInt($("#sauce").val());
    var cheeseChoice = parseInt($("#cheese").val());
    var toppingsChoice = 0;
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppingsChoice++;
    });
    var newPizza = new Pizza(sizeChoice, sauceChoice, cheeseChoice, toppingsChoice);

    $("#output").append("<h3>" + "The total cost for your pizza is:" + " " + "$" + newPizza.cost() + "</h2>");
  });
});
