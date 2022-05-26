window.addEventListener('load', ()=> {
let long;
let lat;

let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone = document.querySelector(".location-timezone");
let temperatureSection = document.querySelector(".temperature");
const temperatureSpan = document.querySelector(".temperature span")

// Get User location
if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    
    // API
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        const { temperature, summary, icon } = data.currently;
        // Set DOM Elements from the API
        temperatureDegree.textContent= temperature;
        temperatureDescription.textContent= summary;
        locationTimezone.textContent= data.timezone;
        // convert farenheit value to celsius
        let celsius = (temperature -32) * (5/9);
        // IconSetup
        setIcons(icon, document.querySelector(".icon"));

        //Celcius > Farenheit > Celcius
        temperatureSection.addEventListener('click', () =>{
            if(temperatureSpan.textContent === "F"){
                temperatureSpan.textContent="C";
                temperatureDegree.textContent= Math.floor(celsius);
            }else{
                temperatureSpan.textContent="F";
                temperatureDegree.textContent = temperature
            }
        })
    });
});
}
function setIcons(icon, iconID){
    const skycons = new Skycons({color: "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
}
});
