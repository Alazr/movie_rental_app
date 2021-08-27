import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentGenreUpdated } from '../store/uI';

function ListGroup(props) {
    const {genres} = useSelector(state=>state.entities)
    const {currentGenre} = useSelector(state=>state.ui)
    const allGenres = [{_id:0,name:"All Genres"},...genres]
    const dispatch = useDispatch()

    const clickHandler = (id) =>{
      dispatch(currentGenreUpdated(id))
    }

    return (
        <ul className="list-group">
          {
            allGenres.map(genre=>(
              <li key={genre._id} onClick={()=>clickHandler(genre._id)} className={`list-group-item ${currentGenre === genre._id ? "active": ""}`}>{genre.name}</li>
            ))
        }
      </ul>
    );
}

export default ListGroup;