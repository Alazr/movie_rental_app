import React from 'react';
import useForm from '../utils/useForm';
import Input from './inputGroup'
import Joi from 'joi-browser'
import { useHistory } from 'react-router-dom';
import {registerUser} from '../store/auth'
import { useDispatch } from 'react-redux';

function Register(props) {
    const hist = useHistory()
    const dispatch = useDispatch()
    const userData = {
        username:"",
        email:"",
        password:"",
    }

    const schema = {
        username:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(5).required(),
    }

    const submitUser = () =>{
        // console.log(data) 
        dispatch(registerUser({
            name:data.username,
            email:data.email,
            password:data.password
        }))
        // hist.push("/")
    }

    const {data,errors,submitHandler,changeHandler,disable} = useForm({
        initialValue:userData,
        schema,
        doSubmit:submitUser
    })

    return (
        <div className="col-12 col-md-6">
        <h1>Register</h1>
        <form onSubmit={submitHandler}>
            <Input type="text" name="username" value={data.username} changeHandler={changeHandler} error={errors.username}  title="Username"/>
            <Input type="email" name="email" value={data.email} changeHandler={changeHandler} error={errors.email} title = "Email" />
            <Input type="password" name="password" value={data.password} changeHandler={changeHandler} error={errors.password} title="Password" />
            <button disabled={disable()} className="btn btn-primary">Register</button>           
        </form>
    </div>
    );
}

export default Register;