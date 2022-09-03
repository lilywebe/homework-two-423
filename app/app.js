import * as model from './model.js';


function initListeners() {
    
    //model.getAllNames();
    $("#gw").click((e)=>{
        const location=$("#gwInput").val();
        if(location!=""){
        getWeather(location);
        }
        else{
            alert("you need to put a location in first");
        }
    })

    
}
 
function getWeather(location){
    model.getCurrentWeather(location, gotData);
    $("#gwInput").val();
    
}

function gotData(){
    printOutput();
}

function printOutput(){

var output = document.getElementById("output");
output.innerHTML = "";
var innerhtml = "";

innerhtml+=`<div class="location">
<div class="location-name">`+model.forecastdata.location.name+`, `+model.forecastdata.location.region+`</div>
<div class="location-time">Current time: `+model.forecastdata.location.localtime.substring(11,16)+`</div>
</div>`;

model.forecastdata.forecast.forecastday.forEach(day => {
innerhtml += `<div class="day"> <div class="daily-info">
<div class="date">`+day.date+`</div>
<div class="daily-details">
<div class="temps">
    <div class="max-temp">High:`+day.day.maxtemp_f+`</div>
    <div class="min-temp">Low:`+day.day.mintemp_f+`</div>
    <div class="avg-temp">Average:`+day.day.avgtemp_f+`</div>
</div>
<div class="precipitation">
    <div class="precipitation-text">`+day.day.daily_chance_of_rain+`% chance of rain</div>
    <div class="precipitation-icon"><img src="`+day.day.condition.icon+`" alt=""></div>
</div>
<div class="rise-set">
    <div class="sunrise">
        Sunrise: `+day.astro.sunrise+`
    </div>
    <div class="sunset">
        Sunset: `+day.astro.sunset+`
    </div>
</div>
</div>
</div>
<div class='hourly-info'>`;

day.hour.forEach(hour => {

    innerhtml +=
    `<div class='hourly'>
    <div class='hourly-time'>` + hour.time.substring(11,16) + `</div>
    <div class='condition-icon'>
    <img src='`+hour.condition.icon+`'></div>
    <div class='hourly-text'>Temperature: `+hour.temp_f+`</div>
    <div class='hourly-text'>Feels like: `+hour.feelslike_f+`</div>
    <div class='hourly-text'>Humidity: `+hour.humidity+`%</div>
    <div class='hourly-text'>Chance of rain:`+hour.chance_of_rain+`%</div>
    </div>`;
     
    
});

innerhtml +="</div></div>";
    
});

output.innerHTML=innerhtml;

}

$(document).ready(function () {
initListeners();
});