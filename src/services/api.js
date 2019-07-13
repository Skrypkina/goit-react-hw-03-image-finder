import axios from 'axios';

const BASE_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';

/* eslint-disable-next-line */
export const fetchImages = (query, page) =>
  axios.get(
    `${BASE_URL}${query}&page=${page}&per_page=12&key=12647850-3be04ccdb337b060210fd27c5`,
  );
