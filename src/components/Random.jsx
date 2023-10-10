import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {

  
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect( ()=>{
  //   fetchData();
  // },[]);

  const {gif,loading,fetchData} = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 flex flex-col gap-y-5 mt-[15px] items-center rounded-lg border border-black  bg-green-500">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h1>
      {
        loading ? (<Spinner/>) :(<img src={gif} width='450px' alt="" />)
      }
      
      <button className="w-10/12 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg" onClick={()=>fetchData()}>
        Generate
      </button>
    </div>
  );
}
