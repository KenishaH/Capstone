import { header, nav, main, footer } from "./components";
import * as store from "./store";

import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
    ${header(state)}
    ${nav(store.nav)}
    ${main(state)}
    ${footer()}
  `;
  router.updatePageLinks();

  afterRender(state);
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".nav-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
if (state.view === "home") {
    // Add an event handler for the submit button on the form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const inputList = event.target.elements;
console.log("Input List: ", inputList);
axios
// Get request to retrieve the current weather data using the API key and providing a city name
.get(
  `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=${inputList.zipcode.value}`
)
.then(response => {
  // Create an object to be stored in the Home state from the response
  store.home.weather = {
    city: response.data.name,
    temp: response.data.main.temp,
    feelsLike: response.data.main.feels_like,
    description: response.data.weather[0].main
  };
router.navigate("/home");
  // An alternate method would be to store the values independently
  /*
  store.Home.weather.city = response.data.name;
  store.Home.weather.temp = kelvinToFahrenheit(response.data.main.temp);
  store.Home.weather.feelsLike = kelvinToFahrenheit(response.data.main.feels_like);
  store.Home.weather.description = response.data.weather[0].main;
  */
})
.catch((err) => {
console.log(err);
});
    });

  }

  if (state.view === "ownerProfile") {
    // Add an event handler for the submit button on the form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      // Create an empty array to hold the toppings
      const service = [];

      // Iterate over the service array

      for (let input of inputList.service) {
        // If the value of the checked attribute is true then add the value to the toppings array
        if (input.checked) {
          service.push(input.value);
        }
      }

      // Create a request body object to send to the API
      const requestData = {
        firstName: inputList.firstName.value,
        lastName: inputList.lastName.value,
        email: inputList.email.value,
        phoneNumber: inputList.phoneNumber.value,
        dogName: inputList.dogName.value,
        dogColor: inputList.dogColor.value,
        dogBreed: inputList.dogBreed.value,
        contactName: inputList.contactName.value,
        contactNumber: inputList.contactNumber.value,
        service: service,

      };
      // Log the request body to the console
      console.log("request Body", requestData);

      axios
        // Make a POST request to the API to create a new pizza
        .post(`${process.env.PAWSPLAYHOUSE_PLACE_API_URL}/owners`, requestData)
        .then(response => {
          //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.review.owner.push(response.data);
          router.navigate("/review");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

//73e423a63fc895b89ff7e26c5438ce34

//https://api.openweathermap.org/data/2.5/weather?q=St. Louis&APPID=${process.env.OPEN_WEATHER_MAP_API_KEY}



router.hooks({
  before: (done, params) => {
    // We need to know what view we are on to know what data to fetch
    const view = params && params.data && params.data.view ? camelCase(params.data.view) : "home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // Add a case for each view that needs data from an API
      // case "home":
      //   axios
      //   // Get request to retrieve the current weather data using the API key and providing a city name
      //   .get(
      //     `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=60624`
      //   )
      //   .then(response => {
      //     // Create an object to be stored in the Home state from the response
      //     store.home.weather = {
      //       city: response.data.name,
      //       temp: response.data.main.temp,
      //       feelsLike: response.data.main.feels_like,
      //       description: response.data.weather[0].main
      //     };

      //     // An alternate method would be to store the values independently
      //     /*
      //     store.Home.weather.city = response.data.name;
      //     store.Home.weather.temp = kelvinToFahrenheit(response.data.main.temp);
      //     store.Home.weather.feelsLike = kelvinToFahrenheit(response.data.main.feels_like);
      //     store.Home.weather.description = response.data.weather[0].main;
      //     */
      //     done();
      // })
      // .catch((err) => {
      //   console.log(err);
      //   done();
      // });
      // break;
      default:
        done();
    }
  },
  already: (params) => {
    const view = params && params.data && params.data.view ? camelCase(params.data.view) : "home";

    render(store[view]);
  }
});


router
  .on({
    "/": () => render(),
    // Use object destructuring assignment to store the data and (query)params from the Navigo match parameter
    // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    // This reduces the number of checks that need to be performed
    ":view": ({ data, params }) => {
      // Change the :view data element to camel case and remove any dashes (support for multi-word views)
      const view = data?.view ? camelCase(data.view) : "home";
      if (view in store) {
        render(store[view]);
      } else {
        render(store.viewNotfound);
        console.log(`View ${view} not defined`);
      }
    },
  })
  .resolve();
