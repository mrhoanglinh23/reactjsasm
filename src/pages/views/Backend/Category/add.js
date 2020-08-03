import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Axios from 'axios';

const AddCate = (props) => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = event => {
        Axios.post('https://5f26d9ae0824d8001655ec71.mockapi.io/cate', event).then(res => {
            console.log(res);
            props.history.push("/admin/cate")
        })
    }
    return (
        <div>
             <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Tên danh mục</label>
                    <input type="text" className="form-control" name="title" ref={register({required: true})} />
                    {errors.title && <span>Nhập tên danh mục</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddCate.propTypes = {

}

export default AddCate
