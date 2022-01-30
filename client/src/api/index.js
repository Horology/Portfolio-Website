import axios from 'axios';
 const url = 'http://localhost:5000/posts';


 export const fetchPosts = () => axios.get(url);
export const createPost = (newPost)  => axios.post(url, newPost)
.then((response) =>{console.log(response)})
.catch((error) => {console.log(error)});
