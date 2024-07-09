import React from 'react'

const Card = ({repos}) => {
    console.log(repos);
  return (
    <div>
        <div>
            <img src={repos.owner?.avatar_url} alt='img'/>
        </div>
    </div>
  )
}

export default Card