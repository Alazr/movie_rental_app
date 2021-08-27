import http from './httpServices'
import config from './config.json'

const genreEndPoint = `${config.baseUrl}/genres`

export const getGenres = () =>{
    return http.get(genreEndPoint)
}