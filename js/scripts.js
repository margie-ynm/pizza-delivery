//business logic
function Pizza(size, sauce, extra, toppings) {
  debugger;
  this.sizeChoice = size;
  this.sauceChoice = sauce;
  this.extraChoice = extra;
  this.toppingsChoice = toppings;
}


//user interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    debugger;
    var sizeChoice = parseInt($("#size").val());
    var sauceChoice = parseInt($("#sauce").val());
    var extraChoice = parseInt($("#extra").val());
    var toppingsChoice = 0;
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppingsChoice++;
    });
    var newPizza = new Pizza(sizeChoice, sauceChoice, extraChoice, toppingsChoice);
  });
});
