import axios from 'axios';

const API_KEY = '37745610-94fa81a6ea5e93adfdf3ac469';

export const fetchImages = (searchingTerm, page = 1) => {
    return axios
        .get(
            `https://pixabay.com/api/?q=${searchingTerm}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(resp => resp.data);
};