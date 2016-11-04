//business logic



//user interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    debugger;
    var size = parseInt($("#size").val());
    var sauce = parseInt($("#sauce").val());
    var extra = parseInt($("#extra").val());
    var toppings = 0;
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppings++;
    });
  });
});
