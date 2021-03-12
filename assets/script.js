    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", () => {
      //console.log(clicked submitButton);
    const searchCity = document.getElementById("searchCity").value;
    console.log(searchCity);
    handleAPI(searchCity);
    });

    //Function that handles API async and await to replace .then
    
    async function handleAPI(cityName) {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6e87985c0e93d8622bf6dcb03fb22522`
        )
        let data = await response.json()
        console.log(data);
        //UV
        let uvResponse = await fetch(`http://api.openweathermap.org/data/2.5/uvi?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=6e87985c0e93d8622bf6dcb03fb22522`)
        let uvData = await uvResponse.json()
        console.log(uvData); 
        return data;
      }
         
    
     

       
     
    

    //Display info on the board take info and display it
    //function displayCityWeather () {}
    
    