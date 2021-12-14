function update() {
    let latitude = document.querySelector('#latitude').value;
    let longitude = document.querySelector('#longitude').value;
    // make request
    fetch(`https://api.weather.gov/points/${latitude},${longitude}`).
        then(response => response.json()).
        then(info => {
            console.log(info);
            let forecastUrl = info.properties.forecast;
            fetch(forecastUrl).
                then(response => response.json()).
                then(forecast => {
                    console.log(forecast);
                    let temperature = forecast.properties.periods[0].temperature;
                    document.querySelector('#temp').innerHTML = temperature;
                });
        });
}
for (let node of document.querySelectorAll('input')) {
    node.addEventListener('input', update);
}
update();

var catButton = document.getElementById("getCat");
catButton.addEventListener('click', function() {
    fetch(`https://api.thecatapi.com/v1/images/search`)
        .then(response => response.json())
        .then(info => {
            console.log(info);
            let catUrl = info[0].url;
            console.log(catUrl);
            let catPic = document.getElementById("catPic");
            catPic.src = catUrl;
        })
});


//Sidebar
var open = false;
function openNav() {
  if (!open){
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.querySelector("header").style.marginLeft = "250px";
    open = true;
  }
  else {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.querySelector("header").style.marginLeft = "0";
    open = false;
  }
}