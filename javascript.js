Java :- document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    setInterval(updateTime, 1000);
    fetchWeather();
});

function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}

function fetchWeather() {
    // Replace with a real API call to fetch weather
    setTimeout(() => {
        document.getElementById('weather').textContent = 'Weather: Sunny, 25°C';
    }, 1000);
}

