$("#search-button").on("click", function() {
    var searchResult = $("#city-search").val();
});


function weather(searchResult) {
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchResult + "&appid=5e8ef1f436a1754fa78c99c12aed203d=imperial"
    }