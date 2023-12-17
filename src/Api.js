import axios from 'axios';

const API_KEY = '39659742-e5b767d99870e0dd08bc36f6a';

export const fetchImages = async (searchQuery, currentPage) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
//console.log(response.data)
    return response.data;
  } catch (error) {
    throw new Error('Error fetching images: ', error);
  }
};