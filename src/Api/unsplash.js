import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization : 'Client-ID OgQfXzmQ-yWX_-W-nE8yW9Iav7ycVajHSGqcym5NhTI'    
       }
});