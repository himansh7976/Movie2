import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'

function Cards({item,idx}) {
  return (


    <Link to={`/movie/${item._id}`} style={{textDecoration:"none", color:"white"}} > 


    <div className="cards">
    <img className="cards__img" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
    <div className="cards__overlay">
        <div className="card__title">{item.original_title}</div>
        <div className="card__runtime">
            {item.release_date}
            <span className="card__rating">{item.vote_average}<i className="fas fa-star" /></span>
        </div>
        <div className="card__description">{item.overview}</div>
    </div>
</div> 
       </Link>
    
  )
}

export default Cards;