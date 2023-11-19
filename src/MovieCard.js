import React from 'react'
import './MovieCard.css'
 const MovieCard = (props) => {

const API_IMG = "https://image.tmdb.org/t/p/w500";

return (
    <div className='card'>
        <div className='poster'>
            <img src={props.poster_path ? API_IMG + props.poster_path : "https://images.unsplash.com/photo-1588546506381-74592e9b8a2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV0ZmxpeHxlbnwwfHwwfHx8MA%3D%3D"} alt="" />
        </div>
                
        <div className='info'>
            <p className='title'>{props.title}</p>
            <p className='vote'>{props.vote_average}</p>
        </div>
        <div className='overview'>
            <h2 className='title_overview'>Overview</h2>
            <h3 className='overview_info' >{props.overview}</h3>
            </div>
    </div>
)
}
export default MovieCard;
