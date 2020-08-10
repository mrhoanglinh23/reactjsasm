import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import firebase from '../../../../firebase'
import { useHistory } from 'react-router-dom';

const AddCate = () => {
    const {register, handleSubmit, errors} = useForm();
    const [desc, setDesc] = useState("");
    let history = useHistory();
    const onSubmit = data => {
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`cateimages/${file.name}`);
        storageRef.put(file).then(function(){
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    desc,
                    image: url
                }
                Axios.post('http://localhost:8000/cate', data).then(res => {
                    console.log(res.data);
                    history.push("/admin/cat"); 
                    alert('Đã thêm danh mục thành công');
                })
            })
        })
    }
    const handleEditorChange = (content, editor) => {
        setDesc(content);
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
