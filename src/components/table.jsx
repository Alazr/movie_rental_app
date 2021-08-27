import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteMovie} from '../store/movies'

function Table({pag}) {
    const dispatch = useDispatch()
    const {list} = useSelector(state=>state.entities.movies)
    
    const deleteHandler = (id) =>{
        dispatch(deleteMovie(id,list))
    }
    return (
        <table className="table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Rate</th>
                <th>InStock</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                pag.map(movie=>(
                    <tr key={movie._id}>
                    <td><Link to={`/movie/${movie._id}`}>{movie.title}</Link></td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>{movie.numberInStock}</td>
                    <td><button onClick={()=>deleteHandler(movie._id)} className="btn btn-danger btn-sm">X</button></td>
                </tr>
                ))
            }
           
        </tbody>
    </table>
    );
}

export default Table;