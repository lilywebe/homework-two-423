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
    model.getCurrentWeather(location);
    $("#gwInput").val();
    
}

$(document).ready(function () {
initListeners();
});