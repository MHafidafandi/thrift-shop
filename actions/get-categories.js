import axios from 'axios';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async () => {
  const res = await axios.get(URL);
  return res.data;
};

export default getCategories;
