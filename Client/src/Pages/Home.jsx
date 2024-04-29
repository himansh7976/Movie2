import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
import { Link } from 'react-router-dom';
import Cards from '../components/Cards/Cards';
import Movielist from '../components/Movielist/Movielist';
import Crousal from '../components/Crousal/Crousal';

function Home() {
    // const [data,setdata]= useState([])

    // useEffect(()=>{
    // const apicall=async ()=>{
    //     const res= await fetch("http://localhost:8002/api/movies/getmovies");
    //     console.log(res);
    //     const jso=await res.json();
    //     console.log(jso)
    //     setdata(jso.results)
    // }
    // apicall();
    // console.log(data)

    // },[])
  return (
   <>
   <Crousal/>
   <div className="poster">
             
               <Movielist/>

            </div>
                

 

   </>
  )
}

export default Home