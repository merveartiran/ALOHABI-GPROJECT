import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((err) => console.log(err));
  if (response) {
    return response.json();
    //if the fetch is succesfull then should convert response  to json 
  }
  //if not you should give the response
  return response;
};

export default fetchProducts;
