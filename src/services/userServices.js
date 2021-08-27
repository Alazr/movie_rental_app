import http from './httpServices'
import config from './config.json'

const userBaseUrl = `${config.baseUrl}/users`

const register = (user) =>{
    
    return http.post(userBaseUrl,user)
}

export default register;