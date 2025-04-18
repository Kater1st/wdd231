const apiKey = '611231d8c66c90a25f1732cd2183b123'; // Replace with your API key
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=-17.8292&lon=31.0522&units=metric&appid=${apiKey}`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        // Current weather
        const currentTemp = Math.round(data.main.temp); // Access current temperature
        const description = data.weather.map(w => w.description).join(', '); // Access weather description
        const capitalizedDescription = description
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        // Populate current weather section
        document.getElementById('weather-data').innerHTML = `
            <p><strong>${currentTemp}°C</strong></p>
            <p>${capitalizedDescription}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

fetchWeather();