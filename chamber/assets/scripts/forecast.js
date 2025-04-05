const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=-17.8292&lon=31.0522&cnt=7&appid=611231d8c66c90a25f1732cd2183b123&mode=json&units=metric&lang=en`;

async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();

        // Extract the next 3 days of forecast from the 'list' property
        const forecast = data.list.slice(0, 3).map(day => ({
            date: new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }),
            temp: Math.round(day.temp.day),
            description: day.weather[0].description,
        }));

        // Populate the forecast section
        document.getElementById('forecast-data').innerHTML = `
            <ul>
                ${forecast
                    .map(
                        day => `
                    <li><strong>${day.date}:</strong> ${day.temp}°C - ${day.description}</li>
                `
                    )
                    .join('')}
            </ul>
        `;
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

fetchForecast();