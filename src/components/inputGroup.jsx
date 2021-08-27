import React from 'react';

function Input({type,name,value,title,changeHandler,error}) {
    return (
         <div className="form-group">
            <label htmlFor={name}>{title}</label>
            <input value={value} type={type} className="form-control" id={name} name={name} onChange={changeHandler} ></input>
        {
            error && <div className="alert-danger">{error}</div>
        }
         </div>
    );
}

export default Input;