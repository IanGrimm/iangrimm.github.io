$(document).ready(function() {
$('#subbut').click(function() {
  var city = $('#city').val();
  var state = $('#state').val();
  var status = $('#status').val();
  var age = $('#age').val();
  var markup = "<tr><td>" + city + "</td><td>" + state + "</td><td>" + status + "</td><td>" + age + "</td></tr>";
  $('tbody').append(markup);
});

});
