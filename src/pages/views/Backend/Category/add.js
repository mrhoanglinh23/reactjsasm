import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Axios from 'axios';
import firebase from '../../../../firebase'
import { useHistory } from 'react-router-dom';

const AddCate = () => {
    const {register, handleSubmit, errors} = useForm();
    let history = useHistory();
    const onSubmit = data => {
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`cateimages/${file.name}`);
        storageRef.put(file).then(function(){
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                Axios.post('http://localhost:8000/cate', data).then(res => {
                    console.log(res);
                    history.push("/admin/cat") 
                    alert('Đã thêm danh mục thành công');
                })
            })
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
                    <label htmlFor="email">Ảnh</label>
                    <input type="file" className="form-control" name="image" ref={register({ required: true})} />
                    {errors.image && errors.image.type === "required" && <span className="alert-danger">Nhập ảnh</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddCate.propTypes = {

}

export default AddCate
