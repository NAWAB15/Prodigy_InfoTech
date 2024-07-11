document.getElementById('get-location').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeatherByCoords(lat, lon);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

document.getElementById('get-weather').addEventListener('click', () => {
    const location = document.getElementById('location-input').value;
    if (location) {
        getWeatherByCity(location);
    } else {
        alert("Please enter a city name.");
    }
});

function getWeatherByCoords(lat, lon) {
    const apiKey = '8010279b0bd890d989f7c373868b2093';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function getWeatherByCity(city) {
    const apiKey = '8010279b0bd890d989f7c373868b2093';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    const weatherDataDiv = document.getElementById('weather-data');
    if (data.cod === 200) {
        weatherDataDiv.innerHTML = `
            <h2 >${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } else {
        weatherDataDiv.innerHTML = `<p>Error: ${data.message}</p>`;
    }
}
