import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [userdata, setuserData] = useState([]);
  useEffect(()=>{
    axios.get(url)
    .then((res)=> res.data)
    .then((data)=>{
      setuserData(data)
      console.log(
      );
    })
  },[]);
  return userdata;
}

export default useFetch;
