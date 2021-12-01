import React, { useEffect, useState } from 'react'
import Movie from './Movie'

function MovieApp() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json()
    setMovies(json.data.movies)
    setLoading(false)
  }
  useEffect(() => {
    getMovies()
  }, [])
  console.log(movies)
  return (
    <div>
      <h1>Movie App!</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => {
          return <Movie movie={movie} key={movie.id} />
        })
      )}
    </div>
  )
}

export default MovieApp
