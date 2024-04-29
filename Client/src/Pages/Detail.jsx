import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css'
function Detail() {

    const [currentMovieDetail, setMovie] = useState([])
    const { id } = useParams()



    // useEffect(() => {
    //     getData()
    //     window.scrollTo(0,0)
    // }, [])
    // console.log(currentMovieDetail)

    // const getData = () => {
    //     fetch(`http://localhost:8002/api/movies/${id}`)
    //     .then(res => res.json())
    // .then(data => setMovie(data))
        
    // }

    useEffect(()=>{
        const api= async ()=>{
            const res= await fetch(`http:localhost:8002/api/movies/getsingle/${id}`);
            console.log(res);
            const js= await res.json();
            setMovie(js)
            
            
        }
        api();
        
        console.log(currentMovieDetail);
    },[])
    

  return (
    <div>

<div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{ currentMovieDetail.original_title}</div>
                        <div className="movie__tagline"></div>
                        <div className="movie__rating">
                             <i class="fas fa-star" />
                            <span className="movie__voteCount"></span>
                        </div>  
                        <div className="movie__runtime"></div>
                        <div className="movie__releaseDate"></div>
                        <div className="movie__genres">
                           
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>   </div>
                    </div>
                    
                </div>
            </div>
           
            <div className="movie__heading">Production companies</div>
           
        </div>

    </div>
  )
}

export default Detail