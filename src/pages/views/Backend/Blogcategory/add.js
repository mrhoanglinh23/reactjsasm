import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Axios from 'axios';
import firebase from '../../../../firebase'
import { useHistory } from 'react-router-dom';

const AddBlogCat = (props) => {
    const {register, handleSubmit, errors} = useForm();
    let history = useHistory();
    const onSubmit = data => {
        Axios.post('http://localhost:8000/danhmucbv', data).then(res => {
            console.log(res.data);
            history.push("/admin/blogcat"); 
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
                <div className="form-group">
                    <label htmlFor="email">Nội dung ngắn</label>
                    <textarea class="form-control" name="description" ref={register({required: true, maxLength: 160})}></textarea>
                    {errors.description && errors.description.type === "required" && <span className="alert-danger">Nhập nội dung ngắn</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddBlogCat
