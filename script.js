function searchWeather(searchValue) {
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=5e8ef1f436a1754fa78c99c12aed203d=imperial",
      dataType: "json",
      success: function(data) {
          
      }