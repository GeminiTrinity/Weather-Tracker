
$(document).ready(function() {

  $("#city-search").on("click", function(event) {
    event.preventDefault();
    var city = $("#city-input").val();
    $.ajax({
      type: "GET",
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&appid=5e8ef1f436a1754fa78c99c12aed203d",
      dataType: "json",
    }).then(function(response) {

      
        var cityDiv = $("<div class='chosen-city'>");
        var name = $("<h5>").text(" " + response.name);
        cityDiv.append(name);
        var img = $("<img>").attr("src" + response.weather[0].icon);
        cityDiv.append(img)
        var temp = $("<p>").text("Temperature: " + response.main.temp);
        cityDiv.append(temp);
        var humidity = $("<p>").text("Humidity: " + response.main.humidity);
        cityDiv.append(humidity);
        var wind = $("<p>").text("Wind Speeds: " + response.wind.speed);
        cityDiv.append(wind);
      
        $("#weather-view").prepend(cityDiv)
        
        var lat = response.coord.lat
        var lon = response.coord.lon
       
       $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=5e8ef1f436a1754fa78c99c12aed203d",
        dataType: "json",
      }).then(function(response) {

        var cityDiv = $("<div class='chosen-city'>");
        var uv = $("<p>").text("UV Index: " + response.value);
        cityDiv.append(uv)
        $("#weather-view").append(cityDiv)

        var cities = [];

        function cityHistory() {
          for (var i  = 0; i < cities.length; i++) {

          var button = $("<button>");

          button.addClass("city");

          button.attr("data-name", cities[i]);

          button.text(cities[i]);

          $("#city-history").append(button);
        }
       
       }; 
      });
    });
  })
})