import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './Detail.css';  

const Detail = () => {
    const { id } = useParams(); // Extract movieId from URL params
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    console.log(">>>>>>",movie)

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8002/api/movies/getsingle/${id}`);
                console.log(response)
                const { success, product } = response.data;
                // console.log(response.data)
                // console.log(product)
                // console.log(success)
                if (!success) {
                    setMovie(product);
                } else {
                    setError('Movie not found');
                }
            } catch (error) {
                setError('Error fetching movie details');
            }
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <div>

        {console.log(movie)}
            {error ? (
                <p>{error}</p>
            ) : movie ? (



               
                <div>

<div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{movie ? movie.original_title : ""}</div>

                       
                      
                        <div className="movie__genres">
                           
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{movie ? movie.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
           
            <div className="movie__heading">Production companies</div>
           
        </div>

    </div>
                




            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Detail;
