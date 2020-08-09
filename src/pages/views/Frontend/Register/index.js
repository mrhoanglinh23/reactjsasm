import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

const Register = props => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        
    }
    return (
        <div>
            <div className="container">
                <form action="" onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-group">
                        <input type="text" class="form-control" name="username" placeholder="Username" ref={register({required: true, maxLength: 20})}></input>
                        {errors.username && errors.username.type === "required" && <span className="alert-danger">Nhập nội dung</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" class="form-control" name="email" placeholder="Username" ref={register({required: true, maxLength: 20})}></input>
                        {errors.email && errors.email.type === "required" && <span className="alert-danger">Nhập nội dung</span>}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            
        </div>
    )
}

Register.propTypes = {

}

export default Register
