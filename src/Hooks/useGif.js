import  { useState, useEffect } from "react";
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
function useGif(tag) {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    setLoading(true);
// how to check which url which will be rendered to do so it will be done through tag if tag is true then tag wla url otherwise normal url
     const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);

     const imageSource=data.data.images.downsized_large.url;
     setGif(imageSource);
     setLoading(false);
  }

  useEffect( () => {
    fetchData();
  }, []);


   return{gif,loading,fetchData};
 
}

export default useGif;
