const KEY = '29871741-92f0be7d75d630b941b41d19d';
const BASIC_URL = 'https://pixabay.com/api/';


function fetchGallery(nextSearch, page) {
  return fetch(
    `${BASIC_URL}?q=${nextSearch}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12
`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}
const API = { fetchGallery };
export default API;