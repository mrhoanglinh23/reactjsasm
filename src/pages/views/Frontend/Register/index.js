import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

const Register = props => {
    const {register, handleSubmit, errors} = useForm();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const onSubmit = data => {
        
    }
    return (
        <div>
            <div className="container">
                   <form action="" >
                        <div className="form-group">
                            <label htmlFor="email">Username</label>
                            <input type="text" className="form-control" 
                            name="username" 
                            ref={register({ required: true, maxLength: 15 })} value={username} />
                            {errors.username && errors.username.type === "required" && <span className="alert-danger">Nhập username</span>}
                            {errors.username  && errors.username.type === "maxLength" && <span className="alert-danger">Tối đa 15 ký tự</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" 
                            name="email" 
                            ref={register({ required: true, maxLength: 15 })} />
                            {errors.email && errors.email.type === "required" && <span className="alert-danger">Nhập email</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Password</label>
                            <input type="password" className="form-control" name="password" ref={register({ required: true, maxLength: 15 })} />
                            {errors.password && errors.password.type === "required" && <span className="alert-danger">Nhập mật khẩu</span>}
                        </div>
                        <button type="submit" className="btn btn-primary">Register </button>
                        <Link to={`/register`}><button type="submit" className="btn btn-primary">Register</button></Link>
                    </form> 
                </div>
        </div>
    )
}

Register.propTypes = {

}

export default Register
