import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddCate = () => {
    const {register, handleSubmit, errors} = useForm();
    let history = useHistory();
    const onSubmit = event => {
        Axios.post('http://localhost:8000/cate', event).then(res => {
            console.log(res);
            history.push("/admin/cat") 
            alert('Đã thêm danh mục thành công');
        })
    }
    return (
        <div>
             <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Tên danh mục</label>
                    <input type="text" className="form-control" name="title" ref={register({ required: true, maxLength: 15 })} />
                    {errors.title && errors.title.type === "required" && <span className="alert-danger">Nhập tên danh mục</span>}
                    {errors.title  && errors.title.type === "maxLength" && <span className="alert-danger">Tối đa 15 ký tự</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddCate.propTypes = {

}

export default AddCate
