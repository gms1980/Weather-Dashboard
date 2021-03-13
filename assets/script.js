    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", () => {
      //console.log(clicked submitButton);
    const searchCity = document.getElementById("searchCity").value;
    console.log(searchCity);
    handleAPI(searchCity);
    });

    //Function that handles API async and await to replace .then
    //Defining asyn function
    async function handleAPI(cityName) {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=6e87985c0e93d8622bf6dcb03fb22522`
        )
    //Storing the response
        let data = await response.json();        
        console.log(data);           
        let uvResponse = await fetch(`https://api.openweathermap.org/data/2.5/uvi?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=6e87985c0e93d8622bf6dcb03fb22522`)
        let uvData = await uvResponse.json();         
        console.log(uvData); 

    // Pulling data from console.log and attaching to html
        //temperature
        var temperatureEL = document.querySelector('#temperature');
        var temperature = data['main']['temp'];
        temperatureEL.innerHTML = temperature;
        //Humidity
        var humidityEl = document.querySelector('#humidity');
        var humidity = data['main']['humidity'];
        humidityEL.innerHTML = humidity;
        //Windspeed
        var windSpeedEl = document.querySelector('#wind-speed');
        var windSpeedEl = data['wind']['speed'];
        windSpeedEL.innerHTML = wind-speed;
        //UV Index
        var uvIndexEl = document.querySelector('#uv-index');
        var UVindexEl = data['wind']['speed'];
        uvindexEL.innerHTML = uv-index;
    }


    

      //  const html = uvData.coord.main.temp(user => {
      //    return `weather: ${temperature}`;
      //  })
      //  .join("");
      //  console.log(html)

      //Appending Data to html jquery selector and then append method
      //document.querySelector("#temperature").append("afterbegin",html);
      // $("#humidity").append("$uvData");
      // $("#wind-speed").append("$uvData");
      // $("#uv-index").append("$uvData");
      
      
      //var currentCity = document.querySelector$("current-city");

      
        
    
      
    