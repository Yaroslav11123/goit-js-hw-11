import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52353296-7e1352dd89e2156c2e1f9fbb2';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
