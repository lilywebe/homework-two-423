var key = "59eb5937d8ba4ac4a36140853221209";
var baseURL = "//api.weatherapi.com/v1/";
function getCurrentDate(){
   
    const date = new Date();
    const year = date.getFullYear;
    const month = date.getMonth + 1;
    const day = date.getDate;
    var curDate= `${year}-${month}-${day}`;
    return curDate;
    
}

var forecastdata = null;

function getCurrentWeather(location, callback){
    //$. is like model.
    const currentDate = getCurrentDate();
    //$("#app").html("");
    //this is for getting and looping through local data
    /*$.getJSON("data/data.json", (data)=>{
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            console.log(element.name);
            $("#app").append(`<p>${element.name}</p>`);
        }
    })
    .fail(function(e){
        alert("Sorry, data cannot be found");
    }) */

    //this is for retrieving data from an api
    $.get(
        `${baseURL}forecast.json?key=${key}&q=${location}&days=3&aqi=no&alerts=no`,
        (data) => {
            forecastdata = data;
            callback();
        }
    )
    .fail(function(e){
        alert("Sorry, no weather rn");
    })

}

function utility(name){
    return name + " Howdy";
}

export {getCurrentWeather, forecastdata };