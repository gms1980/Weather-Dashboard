fetch(
    'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=6e87985c0e93d8622bf6dcb03fb22522'
    
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      var responseSubmitEl = document.querySelector('submit');

