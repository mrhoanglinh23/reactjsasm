import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import firebase from '../../../../firebase'
import { useHistory } from 'react-router-dom';

const AddCate = () => {
    const {register, handleSubmit, errors} = useForm();
    let history = useHistory();

    const onSubmit = data => {
        let file = data.anh[0];
        let storageRef = firebase.storage().ref(`cateimages/${file.name}`);
        storageRef.put(file).then(function(){
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                const newObj = {
                    ...data,
                    anh: url
                }
                Axios.post('http://localhost:8000/cate', newObj).then(res => {
                    console.log(res.data);
                    history.push("/admin/cat");
                    window.location.reload();
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
                    <label htmlFor="email">Nội dung ngắn</label>
                    <textarea class="form-control" name="description" ref={register({required: true, maxLength: 160})}></textarea>
                    {errors.description && errors.description.type === "required" && <span className="alert-danger">Nhập nội dung ngắn</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Ảnh</label>
                    <input type="file" className="form-control" 
                    name="anh" 
                    ref={register({ required: true, pattern: {
                        value: /\.(jpe?g|png|gif)/
                    }})} />
                    {errors.anh && errors.anh.type === "required" && <span className="alert-danger">Nhập ảnh</span>}
                    {errors.anh && errors.anh.type === "pattern" && <span className="alert-danger">Chỉ được phép nhập ảnh gồm .jpg, .jpeg, png, gif</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddCate.propTypes = {

}

export default AddCate
