import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieDetail from '../MovieDetail'

function Detail() {
  const { id } = useParams()
  // console.log(id)
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState({})

  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()
    console.log(json.data.movie)
    setMovie(json.data.movie)
    setLoading(false)
  }
  useEffect(() => {
    getMovieDetail()
  }, [])
  return (
    <>
      <h1>Movie Detail</h1>
      {loading ? <span>Loading...</span> : <MovieDetail movie={movie} />}
    </>
  )
}

export default Detail
