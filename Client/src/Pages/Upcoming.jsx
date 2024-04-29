import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards/Cards';
import './Upcoming.css'

function Upcoming() {
    const [data,setdata]=useState([]);
    useEffect(()=>{

        const api = async ()=>{
            const res= await fetch('http://localhost:8002/api/movies/getupcomingmovies');
            const js=await res.json();
            setdata(js);

        }

        api();
    },[])
    console.log(data);
  return (
    
    <>
    <h1>Upcoming Movies</h1>
    <div className='bg'>
    

    {
        data.map((i)=>(
            <Cards item={i}/>
        ))
    }

    </div>
    </>
  )
}

export default Upcoming