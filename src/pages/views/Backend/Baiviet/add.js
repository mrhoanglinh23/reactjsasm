import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Axios from 'axios';
import firebase from '../../../../firebase'
import { useHistory } from 'react-router-dom';

const AddBaiviet = (props) => {
  const {register, handleSubmit, errors} = useForm();
  let history = useHistory();
  const onSubmit = data => {
    let file = data.image[0];
        let storageRef = firebase.storage().ref(`blogimages/${file.name}`);
        storageRef.put(file).then(function(){
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                Axios.post('http://localhost:8000/baiviet', data).then(res => {
                    console.log(res);
                    history.push("/admin/baiviet") 
                    alert('Đã thêm bài viết thành công');
                    window.location.reload();
                })
            })
        })
  }
    return (
        <div>
             <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Tiêu đề</label>
                    <input type="text" className="form-control" name="title" ref={register({required: true, maxLength: 160})} />
                    {errors.title && errors.title.type === "required" && <span className="alert-danger">Nhập tiêu đề</span>}
                    {errors.title && errors.title.type === "maxLength" && <span className="alert-danger">Tối đa 160 ký tự</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Nội dung</label>
                  <textarea class="form-control" name="description" ref={register({required: true})}></textarea>
                  {errors.noidung && errors.noidung.type === "required" && <span className="alert-danger">Nhập nội dung</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Ảnh</label>
                  <input type="file" className="form-control" name="image" ref={register({required: true})} />
                  {errors.image && errors.image.type === "required" && <span className="alert-danger">Chọn ảnh</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Ngày đăng</label>
                  <input type="date" className="form-control" name="ngaydang" ref={register({required: true})} />
                  {errors.ngaydang && errors.ngaydang.type === "required" && <span className="alert-danger">Nhập ngày đăng</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddBaiviet.propTypes = {

}

export default AddBaiviet
