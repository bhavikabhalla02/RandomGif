import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../CSS/tag.css";
import Spinner from "./Spinner";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
import useGif from "../Hooks/useGif";
function Tag() {
  // const [gif, setGif] = useState('tag');
  // const [loading, setLoading] = useState(false);
  const[tag,setTag] = useState('car');
  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  //   const {data}= await axios.get(url);
  //    const imageSource=data.data.images.downsized_large.url;
  //    setGif(imageSource);
  //    setLoading(false);
  // }

  // useEffect( () => {
  //   fetchData();
  // }, []);
const{gif,loading,fetchData}=useGif(tag);
function changeHandler(e){
  setTag(e.target.value);
}
  function clickHandler() {
       fetchData();
  }


  return (
    <div className="tag-card">
      <h1 className="tag-header">RANDOM {tag} GIF</h1>

      {
        loading ? (<Spinner/> ) : (<img src={gif} width={450} alt="giflogo" />)

      }

      <input className="tag-field" type="text" value={tag} onChange={changeHandler}/>
      <button className="tag-btn" onClick={clickHandler}>
        Generate
      </button>
    </div>
  );
}

export default Tag;
