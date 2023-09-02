import axios from "axios";
import { API_URL } from "../Constants/constant";


export const getRecipes = async (searchQuery) => {
  try
  {
    let res = await axios.get(`${API_URL}/search?q=${searchQuery}`);   
    return res.data;
  }
  catch(error)
  {
    console.log('Error while calling API', error.message);
    return error.res;
  }
}

export const getRecipe = async (searchQuery) => {
  try
  {
    let res = await axios.get(`${API_URL}/get?rId=${searchQuery}`);   
    return res.data;
  }
  catch(error)
  {
    console.log('Error while calling API', error.message);
    return error.res;
  }
}


