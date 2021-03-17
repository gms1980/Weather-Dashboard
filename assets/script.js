
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
        let uvResponse = await fetch(`https://api.openweathermap.org/data/2.5/uvi?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude={part}&appid=6e87985c0e93d8622bf6dcb03fb22522`)
        let uvData = await uvResponse.json();         
        console.log(uvData); 
        
        var temperatureEL = document.querySelector('#temperature');
        var temperature = data['main']['temp'];
        temperatureEL.innerHTML = temperature;
        //Humidity
        var humidityEl = document.querySelector('#humidity');
        var humidity = data['main']['humidity'];
        humidityEl.innerHTML = humidity;
  
        //Windspeed
        var speedEl = document.querySelector('#speed');
        var speed = data['wind']['speed'];
        speedEl.innerHTML = speed;

        var temp0El= document.querySelector('temp0');
        var temp0 = data['dt']['time'];
        temp0El.innerHTML = temp0;


      }
        
      
      //Start a local Storage
    //   const storageInput = document.querySelector('.storage').
    //   const text = document.querySelector('.text');
    //   const button = document.querySelector('button');
      
    //   function createItem() {
    //     localStorage.setItem('searchCity')
    //   }
    //   createItem()

    //   function getValue(){
    //     return localStorage.getItem('searchCity');

    //   }
    //   console.log(getValue());
    //   var search = function() {
    //     var userInput = document.getElementById('artistSearch').value;
    //     localStorage.setItem("search", userInput);
    //     window.location.href = "./artist.html"
    // }
    // document.getElementById("searchBtn").addEventListener('click', search);
        
       
    //5 day weather
        // async function handleAPI(cityName) {
         

    // Pulling data from console.log and attaching to html
        //temperature
        // var temperatureEL = document.querySelector('#temperature');
        // var temperature = data['main']['temp'];
        // temperatureEL.innerHTML = temperature;
        // //Humidity
        // var humidityEl = document.querySelector('#humidity');
        // var humidity = data['main']['humidity'];
        // humidityEl.innerHTML = humidity;    

        // //Windspeed
        // var speedEl = document.querySelector('#speed');
        // var speed = data['wind']['speed'];
        // speedEl.innerHTML = speed;

      
    //}

    //  //UV Index
        // var uvIndexEl = document.querySelector('#uv-index');
        // var uvIndex = uvData['value'];
        // uvIndexEL.innerHTML = uv-index;

        //Icon Maybe?
        // var iconEl = document.dquerySelector("icon");
        // var icon = data ['weather']['icon'];
        // iconEl.innerHTML = icon;
    // 
  
 
   
     

      //Appending Data to html jquery selector and then append method
      //document.querySelector("#temperature").append("afterbegin",html);
      // $("#humidity").append("$uvData");
      // $("#wind-speed").append("$uvData");
      // $("#uv-index").append("$uvData");
      
      
    

      
        
    
      
    