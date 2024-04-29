import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import './Crousal.css'
function Crousal() {

    const [data,setdata]=useState([]);

    useState(()=>{
        const apis=async ()=>{
            const res= await fetch("http://localhost:8002/api/movies/getmovies");
            const js= await res.json();
            setdata(js)

        }
        
        apis();
        
        
    },[])
    
    console.log(data)

  return (
    <>
    <div className="poster" style={{width:"100%"}}>
                 <Carousel
                    //  showThumbs={false}
                     autoPlay={true}
                     transitionTime={5}
                     infiniteLoop={true}
                     showStatus={false}
                    //  interval={5}
                 >
                 {
 
                     data.map((item,idx)=>( 
                        
                        
                       
 
                         <div className="posterImage">
                                     <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
                                 </div>
                        
                 
                                 
                     ))
                 }
 
                            
                             
                     
                 </Carousel>
                
 
             </div>
                 
 
  
 
    </>
   )
}

export default Crousal