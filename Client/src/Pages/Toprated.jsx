import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards/Cards';
import './Toprated.css'

function Toprated() {

    const [top,settop]=useState([]);

    useEffect(()=>{
        const top= async ()=>{
            const res= await fetch("http://localhost:8002/api/movies/getpopular");
            const jso= await res.json();
            settop(jso);
        }
        top();
        
    },[])
   // console.log(top)
  return (
    <>

    {/* <div>top rated</div> */}
    <div className='top-container'>
    {

top.map((i)=>(
 
 <Cards item={i}/>

))
}
    </div>
       
    

    </>

  )
}

export default Toprated