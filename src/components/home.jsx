import React, { useEffect, useState } from 'react';
import ListGroup from './listGroup'
import {loadMovies} from '../store/movies'
import {loadGenres} from '../store/genre'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from './pagination'
import {paginate} from '../utils/pagination'
import _ from 'lodash'
import Table from './table';
import {Link} from 'react-router-dom'
function Home(props) {
    const {list:movies} = useSelector(state=>state.entities.movies)
    const {perPage,pageNum} = useSelector(state=>state.ui)
    const {currentGenre} = useSelector(state=>state.ui)


    const filt = currentGenre !== 0 ?  movies.filter(mov=>mov.genre._id === currentGenre): movies
    const pag = paginate(filt,pageNum,perPage)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadGenres())
        dispatch(loadMovies())
    },[])
    
    return (
        <div className="container">

        <div className="row">
            <div className="col col-2">
                 <ListGroup/>
            </div>
        <div className="col col-8">
        <Link to="/movie/new">
        <button type="submit" className="btn btn-primary">New Movie</button>
        </Link>
            <Table pag={pag} />
            <Pagination filt={filt}/>
        </div>
        </div>
        </div>
    );
}

export default Home;