import axios from "axios";
import API from "./api.json";

export async function productsFetch() {
  const reponse = await axios.get(`${API.baseURL}/data`);
  return reponse.data.products;
}
