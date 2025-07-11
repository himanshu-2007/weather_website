const url = "https://goweather.herokuapp.com/weather/";
const btn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const t1 = document.querySelector(".t1");
const w1 = document.querySelector(".w1");
const d1 = document.querySelector(".d1");
const t2 = document.querySelector(".t2");
const w2 = document.querySelector(".w2");
const t3 = document.querySelector(".t3");
const w3 = document.querySelector(".w3");
const t4 = document.querySelector(".t4");
const w4 = document.querySelector(".w4");

// Add event listeners for both button click and Enter key
btn.addEventListener("click", fetchWeather);
cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        fetchWeather();
    }
});

async function fetchWeather() {
    const city = cityInput.value.trim();
    
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    // Clear previous data
    clearWeatherData();
    
    try {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        btn.disabled = true;
        
        const weatherData = await getWeather(city);
        updateWeatherUI(weatherData);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Please try again.");
    } finally {
        btn.innerHTML = '<i class="fas fa-search"></i> Search';
        btn.disabled = false;
    }
}

function clearWeatherData() {
    t1.textContent = "Temperature: --";
    w1.textContent = "Wind: --";
    d1.textContent = "Description: --";
    t2.textContent = "Temperature: --";
    w2.textContent = "Wind: --";
    t3.textContent = "Temperature: --";
    w3.textContent = "Wind: --";
    t4.textContent = "Temperature: --";
    w4.textContent = "Wind: --";
}

function updateWeatherUI(data) {
    t1.textContent = `Temperature: ${data.temperature || 'N/A'}`;
    w1.textContent = `Wind: ${data.wind || 'N/A'}`;
    d1.textContent = `Description: ${data.description || 'N/A'}`;

    if (data.forecast && data.forecast.length >= 3) {
        t2.textContent = `Temperature: ${data.forecast[0].temperature || 'N/A'}`;
        w2.textContent = `Wind: ${data.forecast[0].wind || 'N/A'}`;
        t3.textContent = `Temperature: ${data.forecast[1].temperature || 'N/A'}`;
        w3.textContent = `Wind: ${data.forecast[1].wind || 'N/A'}`;
        t4.textContent = `Temperature: ${data.forecast[2].temperature || 'N/A'}`;
        w4.textContent = `Wind: ${data.forecast[2].wind || 'N/A'}`;
    }
}

async function getWeather(city) {
    try {
        const res = await axios.get(url + city);
        return res.data;
    } catch (error) {
        console.error("Error in getWeather:", error);
        throw error;
    }
}
