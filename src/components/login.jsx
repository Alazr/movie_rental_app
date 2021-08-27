import React from 'react';
import useForm from '../utils/useForm';
import Input from './inputGroup'
import Joi from 'joi-browser'
import { useHistory } from 'react-router-dom';
import {loginUser} from '../store/auth'
import { useDispatch } from 'react-redux';
function Login(props) {
    const hist = useHistory()
    const dispatch = useDispatch()
    const acc = {
        email:"",
        password:"",
    }

    const schema = {
        email:Joi.string().email().required(),
        password:Joi.string().min(5).required(),
    }

    const loggedIn = () =>{
        dispatch(loginUser(data))
        // hist.push("/")
    }

    const {data,errors,submitHandler,changeHandler,disable} = useForm({
        initialValue:acc,
        schema,
        doSubmit:loggedIn
    })
    return (
        <div className="col-12 col-md-6">
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
            <Input type="email" name="email" value={data.email} changeHandler={changeHandler} error={errors.email} title = "Email" />
            <Input type="password" name="password" value={data.password} changeHandler={changeHandler} error={errors.password} title="Password" />
            <button disabled={disable()} className="btn btn-primary">Login</button>           
        </form>
    </div>
    );
}

export default Login;