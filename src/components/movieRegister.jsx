import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Input from './inputGroup'
import SelectInput from './selectInput';
import Joi from 'joi-browser'
import useForm from '../utils/useForm'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loadMovie,addMovie} from '../store/movies'
import { toInteger } from 'lodash';

function MovieRegister(props) {
    const dispatch = useDispatch()
    const {list:movies} = useSelector(state=>state.entities.movies)
    const [mov,setMov] =useState({
        title:"",
        rate:"",
        genre: "",
        inStock:""
    })
    const [isLoaded , setIsLoaded] = useState(false)

    const {movieDetail} = useSelector(state=>state.entities.movies)
    const {genres} = useSelector(state=>state.entities)
    const {id} = useParams()
    const newForm = id === "new"
    useEffect(()=>{
        if (!newForm ){
            dispatch(loadMovie(id))
        }
    },[])
    useEffect(()=>{
        movieDetail && !newForm && setMov({
            title:movieDetail.title,
            rate:movieDetail.dailyRentalRate,
            genre:movieDetail.genre.name,
            inStock:movieDetail.numberInStock
        })
        setIsLoaded(true)
    },[movieDetail])


    const schema = {
        title:Joi.string().required(),
        rate:Joi.number().max(10).required(),
        genre:Joi.string().required(),
        inStock:Joi.number().required()
    }
    const his = useHistory()
    const submitMovie = ()=>{
        const gen = genres.filter(ob=>ob.name === data.genre)[0]

        dispatch(addMovie({
            title:data.title,
            numberInStock:data.inStock,
            genreId:gen._id,
            dailyRentalRate:data.rate
        },movies))
        his.push("/")
    }

     const {data,submitHandler,changeHandler,errors} = useForm({
        isLoaded,    
        initialValue:mov,
            schema,
            doSubmit:submitMovie
        })


    



    return (
        <div className="container">

     <form onSubmit={submitHandler} className="col col-5">
         <Input error={errors.title} changeHandler={changeHandler} value={data.title} name="title" title="Title" type="text"/>
        <Input error={errors.rate} changeHandler={changeHandler} value={data.rate} name="rate" title="Rate" type="number"/>
        <SelectInput name="genre" value={data.genre} changeHandler={changeHandler}/>
        <Input error={errors.inStock} changeHandler={changeHandler} value={data.inStock} name="inStock" title="NUmberInStock" type="number"/>
        <button type="submit" className="btn btn-primary">Submit</button>
     </form>
        </div>
    );
}

export default MovieRegister;