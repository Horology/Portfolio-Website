import axios from 'axios';
 const url = process.env.REACT_APP_CONTACTS_URL;


 export const fetchPosts = () => axios.get(url);
export const createPost = (newPost)  => axios.post(url, newPost)
.then((response) =>{console.log(response)})
.catch((error) => {console.log(error)});
