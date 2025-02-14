/**
 * Create a promise that makes a fetch call, but resolves with the data only 2 seconds
 * after the data has been received in the fetch.
 */

import { BASE_URL } from "./lib";

const fetchData = () => {
  fetch(BASE_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error occurred while fetching data");
      }
      return response.json();
    })
    .then((data) => {
      setTimeout(() => {
        console.log("Data fetched successfully:", data);
      }, 2000);
    })
    .catch((error) => {
      console.error("Error occurred while fetching data:", error);
    });
};

fetchData();
