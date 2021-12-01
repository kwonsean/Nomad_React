function Movie({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.medium_cover_image} alt='Movie poster' />
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  )
}

export default Movie
