
const API_KEY = '46982769-551c832606b75e5005f83cf77';

const BASE_URL = 'https://pixabay.com/api/';
        
export const backendData = text => {
  const options = new URLSearchParams({
      key: API_KEY,
      q: text,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
  });

  return fetch(`${BASE_URL}?${options}`).then(response => {
      if (!response.ok) {
          throw new Error(response.status);
      }
      return response.json();
  });
};