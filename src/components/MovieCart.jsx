import React from 'react'

const MovieCart = ({video}) => {
    // const {video} = props
    // this is equal our {video}
  return (
    <div className='movie'>
    <div>
      <p>{video.Year}</p>
    </div>
    <div>
      <img src={video.Poster !== 'N/A' ?
    video.Poster : "https://via.placeholder.com/400"  
    } />
    </div>
    <div>
      <span>
        {video.Type}
      </span>
      <h3>
        {video.Title}
      </h3>
    </div>
  </div>

  )
}

export default MovieCart