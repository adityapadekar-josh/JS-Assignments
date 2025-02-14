/**
 * Create a promise that makes a fetch call, but resolves with the data only 2 seconds
 * after the data has been received in the fetch.
 * Complete the above tasks with async/await.
 */

import { BASE_URL } from "./lib";

const fetchData = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Error occurred while fetching data");
    }

    const data = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Data fetched successfully:", data);
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
  }
};

fetchData();
