import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import firebase from '../../../../firebase';

const Login = () => {
    const {register, handleSubmit, errors} = useForm();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = data => {
        
    }
    return (
        <div>
            <div className="container">
                   <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" 
                            name="username" 
                            ref={register({ required: true })} />
                            {errors.email && errors.email.type === "required" && <span className="alert-danger">Nhập email</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Password</label>
                            <input type="password" className="form-control" name="password" />
                            {errors.password && errors.password.type === "required" && <span className="alert-danger">Nhập mật khẩu</span>}
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <Link to={`/register`}><button type="submit" className="btn btn-primary">Register</button></Link>
                    </form> 
                </div>
        </div>
    )
}

export default Login

