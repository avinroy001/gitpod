import React from 'react'
import "./Card.css";

const Card = ({repos}) => {
    console.log(repos);
  return (
    <div className='cardWrapper'>
        <div>
            <img src={repos.owner?.avatar_url} alt='img'/>
        </div>
        <div className='cardInfo'>
        <h2>{repos?.name}</h2>
        <h5>{repos?.description}</h5>
        </div>
    </div>
  )
}

export default Card