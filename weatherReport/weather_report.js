function showweatherDetails(event) {
    event.preventDefault();
  
    const city = document.getElementById('city').value.trim();
    const apiKey = '20ac366c66d44bbc58c8abc1912bbe7f'; // Your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
      })
      .catch(error => {
        document.getElementById('weatherInfo').innerHTML = `<p style="color:red;">${error.message}</p>`;
      });
  }
  
  document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
  