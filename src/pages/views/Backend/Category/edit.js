import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditCate = ({cate}) => {
    const { id } = useParams();
    let history = useHistory();
    const {register, handleSubmit, errors, setValue} = useForm();
    
    const onSubmit = data => {
        Axios.put('http://localhost:8000/cate', data).then(res => {
            console.log(res);
            history.push("/admin/cat") 
        })
    }
    useEffect(() => {
        Axios.get(`http://localhost:8000/cate/${id}`).then(res => {
            setValue("id", res.data.id);
            setValue("title", res.data.title);
        })
    }, [id]);

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                    <label htmlFor="email">ID</label>
                    <input type="text" className="form-control" name="title" readOnly value={cate.id} ref={register({required: true})} />
                    {errors.title && <span>Nhập tên danh mục</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Tên danh mục</label>
                    <input type="text" className="form-control" name="title" value={cate.title} ref={register({required: true})} />
                    {errors.title && <span>Nhập tên danh mục</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

EditCate.propTypes = {

}

export default EditCate
