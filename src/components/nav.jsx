import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import jwt_decoder from 'jwt-decode'
function Nav(props) {
    const {authToken} = useSelector(state=>state.auth)
    const user = jwt_decoder(authToken)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {
              user ?  <>
              <li className="nav-item">
              <Link className="nav-link" to="/">{user.name}</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/logout">Logout</Link>
              </li>
              </>
              :
              <>
              <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
                
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
              </li>
              </>
            }
         
          </ul>
        </div>
      </nav>
    );
}

export default Nav;