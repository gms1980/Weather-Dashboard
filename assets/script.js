fetch(
    'https://api.openweathermap.org/data/2.5/weather?api_key=6e87985c0e93d8622bf6dcb03fb22522https://api.openweathermap.org/data/2.5/onecall?api_key=6e87985c0e93d8622bf6dcb03fb22522'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });

    
  
// class Fetch {
//     async getCurrent(input) {
//       const myKey = "6e87985c0e93d8622bf6dcb03fb22522";
  
//       //make request to url
  
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?api_key=6e87985c0e93d8622bf6dcb03fb22522`
//       );
  
//       const data = await response.json();
  
//       console.log(data);
  
//       return data;
//     }
//   }
//   const ft = new Fetch();
// const ui = new UI();

// //add event listeners//

// const search = document.getElementById("searchUser");
// const button = document.getElementById("submit");
// button.addEventListener("click", () => {
//   const currentVal = search.value;

//   ft.getCurrent(currentVal).then((data) => {
//     //call a UI method//
//     ui.populateUI(data);
//     //call saveToLS
//     ui.saveToLS(data);
//   });
// });

// //event listener for local storage

// window.addEventListener("DOMContentLoaded", () => {
//   const dataSaved = ui.getFromLS();
//   ui.populateUI(dataSaved);
// });