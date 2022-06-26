import axios from 'axios';

import { Recipe } from '../models/recipe';

const baseUrl = "https://api.spoonacular.com";
const apiKey:string  = "apiKey=7e82118452034391b9259383026a57a2";

const getRecipes = async (query:string) => {
  const response = await axios.get<Recipe[]>
  (`${baseUrl}/food/menuItems/search?query=${query}&${apiKey}`)
  .then((response: any )=> { 
    return response.data.menuItems;
  });
  return response;
};

const serviceRecipe = {
  getRecipes,
};
  
  export default serviceRecipe;