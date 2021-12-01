import { Link } from 'react-router-dom'

function Movie({ movie }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h2>
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
