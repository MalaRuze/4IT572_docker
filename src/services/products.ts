import axios from 'axios';
import { IGetProductsResponse } from 'src/models';

const isProduction = process.env.NODE_ENV === 'production';

export const getProducts = async () => {
  let response: IGetProductsResponse;

  if (isProduction) {
    response = await axios.get(
      'https://react-shopping-cart-67954.firebaseio.com/products.json'
    );
  } else {
    response = require('src/static/json/products.json');
  }

  const { products } = response.data || [];

  return products;
};
