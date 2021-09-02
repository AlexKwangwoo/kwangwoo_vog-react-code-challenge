import { POSTAL_CODE_INFO } from "./types";
import data from "../PostalCodeData/PostalCodeData.json";

export async function SearchByPostalCode(code) {
  // const res = await fetch(`https://api.zippopotam.us/us/${code}`, {
  //   method: "GET",
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Content-Type": "application/json",
  //   },
  // });
  // let data;
  // try {
  //   data = await res.json();
  // } catch (error) {
  //   console.error(error);
  // }
  console.log("data", data);
  return {
    type: POSTAL_CODE_INFO,
    payload: data,
  };
}
