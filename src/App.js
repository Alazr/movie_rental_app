import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/nav'
import Home from './components/home'
import './style.css'
import {Switch,Route} from "react-router-dom"
import MovieRegister from './components/movieRegister'
import Register from './components/register'
import Login from './components/login'
import Logout from './components/logout' 
function App() {
  return (
    <>
      <Nav/>
    <div className="container">
      <Switch>
        <Route path="/movie/:id">
          <MovieRegister/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/logout">
          <Logout/>
        </Route>
        <Route>
          <Home path="/"/>
        </Route>
      </Switch>
    </div>
    </>
  );
}

export default App;
