import http from './httpServices'
import config from './config.json'

const authBaseUrl = `${config.baseUrl}/auth`

const login = (acc) =>{
    
    return http.post(authBaseUrl,acc)
}

export default login;