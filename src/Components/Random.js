import React, { useState, useEffect } from "react";
import "../CSS/random.css";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";
function Random() {
  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState(false);
  // // 
  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const {data}= await axios.get(url);
  //    const imageSource=data.data.images.downsized_large.url;
  //    setGif(imageSource);
  //    setLoading(false);
  // }

  // useEffect( () => {
  //   fetchData();
  // }, []);

const{gif,loading,fetchData}=useGif();
  function clickHandler() {
       fetchData();
  }
  return (
    <div className="random-card">
      <h1 className="random-header">A RANDOM GIF</h1>

      {
        loading ? (<Spinner/> ) : (<img src={gif} width={450} alt="giflogo" />)

      }
      <button className="random-btn" onClick={clickHandler}>
        Generate
      </button>
    </div>
  );
}

export default Random;
