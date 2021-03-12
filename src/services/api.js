import axios from 'axios';
// https://api.hgbrasil.com/weather?key=db295e57&lat=-23.682&lon=-46.875

export const key = 'db295e57';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;