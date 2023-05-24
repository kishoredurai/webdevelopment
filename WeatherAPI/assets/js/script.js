var input = document.querySelector('#search');
const myDiv = document.getElementById('myDiv');

var button= document.querySelector('#submit');


button.addEventListener('click', function(name){
    const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    const api = 'efa9e80a20c8713bdbb5ae4e1f3b29db';
fetch(baseUrl+'?q='+input.value+'&appid='+api+'&units=metric')
.then(response => response.json())
.then(data => {
    var forecastList = data.list;
        var forecastData = filterDailyForecast(forecastList);
        myDiv.classList.toggle('hidden');

        // Handle the filtered weather data here
        console.log(forecastData);
        document.querySelector("#title1").innerHTML = forecastData[0].weather[0].description;
        document.querySelector("#date1").innerHTML = "📆 "+forecastData[0].dt_txt;

        document.querySelector("#h1").innerHTML = "Humidity : ( " + Math.round(forecastData[0].main.humidity) + "% )";
        document.querySelector("#t1").innerHTML = "Temperature : ( " + Math.round(forecastData[0].main.temp) + "*C )";
        document.querySelector("#s1").innerHTML = "Speed : ( " + Math.round(forecastData[0].wind.speed) + "Km/h )";
        document.querySelector("#p1").innerHTML = "Presure : ( " + Math.round(forecastData[0].main.pressure) + " hPa )";

        document.querySelector("#date2").innerHTML = "📆 "+forecastData[1].dt_txt;
        document.querySelector("#title2").innerHTML = forecastData[1].weather[0].description;
        document.querySelector("#h2").innerHTML = "Humidity : ( " + Math.round(forecastData[1].main.humidity) + "% )";
        document.querySelector("#t2").innerHTML = "Temperature : ( " + Math.round(forecastData[1].main.temp) + "*C )";
        document.querySelector("#s2").innerHTML = "Speed : ( " + Math.round(forecastData[1].wind.speed) + "Km/h )";
        document.querySelector("#p2").innerHTML = "Presure : ( " + Math.round(forecastData[1].main.pressure) + " hPa )";
        

        document.querySelector("#title3").innerHTML = forecastData[2].weather[0].description;
        document.querySelector("#date3").innerHTML = "📆 "+forecastData[2].dt_txt;

        document.querySelector("#h3").innerHTML = "Humidity : ( " + Math.round(forecastData[2].main.humidity) + "% )";
        document.querySelector("#t3").innerHTML = "Temperature : ( " + Math.round(forecastData[2].main.temp) + "*C )";
        document.querySelector("#s3").innerHTML = "Speed : ( " + Math.round(forecastData[2].wind.speed) + "Km/h )";
        document.querySelector("#p3").innerHTML = "Presure : ( " + Math.round(forecastData[2].main.pressure) + " hPa )";

        document.querySelector("#title4").innerHTML = forecastData[3].weather[0].description;
        document.querySelector("#date4").innerHTML = "📆 "+forecastData[3].dt_txt;

        document.querySelector("#h4").innerHTML = "Humidity : ( " + Math.round(forecastData[3].main.humidity) + "% )";
        document.querySelector("#t4").innerHTML = "Temperature : ( " + Math.round(forecastData[3].main.temp) + "*C )";
        document.querySelector("#s4").innerHTML = "Speed : ( " + Math.round(forecastData[3].wind.speed) + "Km/h )";
        document.querySelector("#p4").innerHTML = "Presure : ( " + Math.round(forecastData[3].main.pressure) + " hPa )";

        document.querySelector("#title5").innerHTML = forecastData[4].weather[0].description;
        document.querySelector("#date5").innerHTML = "📆 "+forecastData[4].dt_txt;

        document.querySelector("#h5").innerHTML = "Humidity : ( " + Math.round(forecastData[4].main.humidity) + "% )";
        document.querySelector("#t5").innerHTML = "Temperature : ( " + Math.round(forecastData[4].main.temp) + "*C )";
        document.querySelector("#s5").innerHTML = " Speed : ( " + Math.round(forecastData[4].wind.speed) + "Km/h )";
        document.querySelector("#p5").innerHTML = "Presure : ( " + Math.round(forecastData[4].main.pressure) + " hPa )";

})

});

function filterDailyForecast(forecastList) {
    var dailyForecast = [];
    var currentDate = '';

    forecastList.forEach(function(forecast) {
      var forecastDate = forecast.dt_txt.split(' ')[0];
      if (forecastDate !== currentDate) {
        dailyForecast.push(forecast);
        currentDate = forecastDate;
      }
    });

    return dailyForecast;
  }