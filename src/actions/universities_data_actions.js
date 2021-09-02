import { TOTAL_UNI_COUNTRY_DATA, TOTAL_UNI_DATA } from "./types";
import data from "../CountryData/CountryData.json";

export async function UniData(country) {
  const res = await fetch(
    `http://universities.hipolabs.com/search?country=${country}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let data;
  try {
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return {
    type: TOTAL_UNI_DATA,
    payload: data,
  };
}

export async function InitalCountryData() {
  const total_data = data.data;
  let total_counties_array = [];
  for (let key in total_data) {
    total_counties_array.push(total_data[key]);
  }

  return {
    type: TOTAL_UNI_COUNTRY_DATA,
    payload: total_counties_array,
  };
}
