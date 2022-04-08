import axios from "axios";
import { data } from "./demoData";
export const getProjects = async () => {
  return axios.get('https://catfact.ninja/fact').then(response => {
    console.log(response.data.fact)
    return data
  }).catch(e => {
    console.error(e)
    return []
  })
  
};
