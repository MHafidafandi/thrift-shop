import axios from 'axios';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async () => {
  const res = await axios.get(URL);
  return res.data;
};

export default getProducts;
