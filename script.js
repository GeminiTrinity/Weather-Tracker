$("#search-button").on("click", function(event) {
    event.preventDefault();
    var city = $(".city-search").val();

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=5e8ef1f436a1754fa78c99c12aed203d",
      method: "GET"
    }).then(function(response) {
        console.log(response)
    })

});