import React from 'react'

function MovieDetail({ movie }) {
  console.log('detil', movie)

  return (
    <div>
      <h1>{movie.title_long}</h1>
      <img src={movie.large_cover_image} alt='Poster' />
      <div>
        <b style={{ paddingRight: 20 }}>Genre</b>
        {movie.genres.map((g) => (
          <span style={{ paddingRight: 10 }}>{g}</span>
        ))}
      </div>
      <div>
        <b style={{ paddingRight: 20 }}>Rating</b>
        <span>{movie.rating}</span>
      </div>
      <div>
        <b style={{ paddingRight: 20 }}>Runtime</b>
        <span>{movie.runtime} min</span>
      </div>
      <div>
        <b>Description</b>
        <p style={{ margin: 0 }}>{movie.description_full}</p>
      </div>
    </div>
  )
}

export default MovieDetail
