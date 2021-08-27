import http from './httpServices'
import config from './config.json'

const moviesEndPoint = `${config.baseUrl}/movies`

const getMovies = () =>{
    return http.get(moviesEndPoint)
}
const getMovie = (id) =>{
    return http.get(`${moviesEndPoint}/${id}`)
}

const deleteMovie = (id) =>{
    return http.delete(`${moviesEndPoint}/${id}`)
}

const saveMovie = (movie) => {
    return http.post(moviesEndPoint,movie)
}


export default {
    getMovies,
    getMovie,
    deleteMovie,
    saveMovie
}
