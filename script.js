
var previousCity = document.getElementById(".city-button")

$(document).ready(function(displayCity) {

  $(document).on("click", "#city-button", displayCity);

  $("#card-one").css({"display" : "none"});
  $("#card-two").css({"display" : "none"});
  $("#card-three").css({"display" : "none"});
  $("#card-four").css({"display" : "none"});
  $("#card-five").css({"display" : "none"});

  $("#city-search").on("click", function(event) {
    event.preventDefault();
    var city = $("#city-input").val();

    $.ajax({
      type: "GET",
      url: "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&appid=5e8ef1f436a1754fa78c99c12aed203d",
      dataType: "json",
    }).then(function(response) {
      $("#card-one").css({"display" : ""});
      $("#card-two").css({"display" : ""});
      $("#card-three").css({"display" : ""});
      $("#card-four").css({"display" : ""});
      $("#card-five").css({"display" : ""});
      $("#day-one").empty();
      $("#day-two").empty();
      $("#day-three").empty();
      $("#day-four").empty();
      $("#day-five").empty();
      

     
      // 1st day
      var dayOne = $("<div class='city-daily'>");
      var weatherImg = response.list[3].weather[0].icon
      var weatherURL = "http://openweathermap.org/img/wn/"+ weatherImg +".png"
      var img = $("<img>").attr("src", + weatherURL);
      dayOne.append(img)
      var temp = $("<p>").text("Temperature: " + response.list[3].main.temp + "°");
      dayOne.append(temp);
      var humidity = $("<p>").text("Humidity: " + response.list[3].main.humidity + "%");
      dayOne.append(humidity);
      $("#day-one").prepend(dayOne)
      

      // 2nd day
      var dayTwo = $("<div class='city-daily'>");
      var weatherImg = response.list[11].weather[0].icon
      var weatherURL = "http://openweathermap.org/img/wn/"+ weatherImg +".png"
      var img = $("<img>").attr("src", + weatherURL);
      dayTwo.append(img)
      var temp = $("<p>").text("Temperature: " + response.list[11].main.temp + "°");
      dayTwo.append(temp);
      var humidity = $("<p>").text("Humidity: " + response.list[11].main.humidity + "%");
      dayTwo.append(humidity);
      $("#day-two").prepend(dayTwo)

      // 3rd day
      var dayThree = $("<div class='city-daily'>");
      var weatherImg = response.list[19].weather[0].icon
      var weatherURL = "http://openweathermap.org/img/wn/"+ weatherImg +".png"
      var img = $("<img>").attr("src", + weatherURL);
      dayThree.append(img)
      var temp = $("<p>").text("Temperature: " + response.list[19].main.temp + "°");
      dayThree.append(temp);
      var humidity = $("<p>").text("Humidity: " + response.list[19].main.humidity + "%");
      dayThree.append(humidity);
      $("#day-three").prepend(dayThree)

      // 4th day
      var dayFour = $("<div class='city-daily'>");
      var weatherImg = response.list[27].weather[0].icon
      var weatherURL = "http://openweathermap.org/img/wn/"+ weatherImg +".png"
      var img = $("<img>").attr("src", + weatherURL);
      dayFour.append(img)
      var temp = $("<p>").text("Temperature: " + response.list[27].main.temp + "°");
      dayFour.append(temp);
      var humidity = $("<p>").text("Humidity: " + response.list[27].main.humidity + "%");
      dayFour.append(humidity);
      $("#day-four").prepend(dayFour)

      // 5th day
      var dayFive = $("<div class='city-daily'>");
      var weatherImg = response.list[35].weather[0].icon
      var weatherURL = "http://openweathermap.org/img/wn/"+ weatherImg +".png"
      var img = $("<img>").attr("src", + weatherURL);
      dayFive.append(img)
      var temp = $("<p>").text("Temperature: " + response.list[35].main.temp+ "°");
      dayFive.append(temp);
      var humidity = $("<p>").text("Humidity: " + response.list[35].main.humidity + "%");
      dayFive.append(humidity);
      $("#day-five").prepend(dayFive)
    })

    function cityButtons() {

      var button = $("<button>");
      button.addClass("city-button");
      button.attr("data-name", city);
      button.text(city);
      $("#city-history").append(button);
  }
  cityButtons()

    $.ajax({
      type: "GET",
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&appid=5e8ef1f436a1754fa78c99c12aed203d",
      dataType: "json",
    }).then(function(response) {

       $("#weather-view").empty();
        var cityDiv = $("<div class='chosen-city'>");
        var name = $("<h5>").text("" + response.name);
        cityDiv.append(name);
        var img = $("<img>").attr("src" + response.weather[0].icon);
        cityDiv.append(img)
        var temp = $("<p>").text("Temperature: " + response.main.temp + "°");
        cityDiv.append(temp);
        var humidity = $("<p>").text("Humidity: " + response.main.humidity + "%");
        cityDiv.append(humidity);
        var wind = $("<p>").text("Wind Speeds: " + response.wind.speed + " mph");
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

          button.addClass("city-button");

          button.attr("data-name", cities[i]);

          button.text(cities[i]);

          $("#city-history").append(button);
          
        }
       
       }; 
      });
    });
    
  })
  
  });
