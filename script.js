$("#city-search").on("click", function(event) {
  event.preventDefault();
  var city = $("#city-input").val();
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=5e8ef1f436a1754fa78c99c12aed203d";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);
  });
})
