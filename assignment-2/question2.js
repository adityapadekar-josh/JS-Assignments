/**
 * Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ).
 * Log the data into the console once it is received
 */

import { link } from "./lib";

const fetchData = () => {
  fetch(link)
    .then((response) => {
      if (!response.ok) {
        console.log("Error occurred while fetching data")
        return undefined
      }
      return response.json();
    })
    .then((data) => {
      console.log("data fetched successfully:", data);
    })
    .catch((error) => {
      console.error("Error occurred while fetching data:", error);
    });
};

fetchData();
