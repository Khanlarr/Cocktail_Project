import { useState,useEffect } from 'react';
export default function useFetch(url) {
    const [data,setData]=useState([]);
    const [pedding,setPedding]=useState(true)
    const [error,setError]=useState(null)
    useEffect(()=>{
        setTimeout(() => {
            fetch(url)
      .then((res)=>{
          if(!res.ok){
              throw Error("Yanlisdir")
          }
       return  res.json();
      })
      .then(data=>{
          setData(data.drinks)
          console.log(data)
          setPedding(false)
          setError(null)
      })
      .catch(err=>{
           setPedding(false)
          setError(err.message)
      })
        }, 1000);
    },[url])
  return {data,pedding,error}
}
