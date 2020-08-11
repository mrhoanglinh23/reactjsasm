import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Axios from 'axios';
import firebase from '../../../../firebase'
import { useHistory, useParams } from 'react-router-dom';

const EditCate = (props) => {
    // gọi id bằng useParams
    const {id} = useParams();
    const {register, handleSubmit, errors} = useForm();
    // tạo đối tượng qua useState
    const[cate, setCate] = useState([]);
    let history = useHistory();
    // hiển thị dữ liệu có id thông qua useEffect
    useEffect(()=>{
        Axios.get(`http://localhost:8000/cate/${id}`)
          .then(res=>{
              console.log(res)
              setCate(res.data)
          })
      },[])
    const onSubmit = data => {
        let file = data.anh[0];
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        storageRef.put(file).then(function(){
            storageRef.getDownloadURL().then((url) => {
                const newObj = {
                    ...data,
                    anh: url
                }
                Axios.put(`http://localhost:8000/cate/${id}`, newObj).then(res => { // cai duong dan nay em lay dau ra the http://localhost:8000/cate/${id}/products
                    console.log(res.data)
                    history.push('/admin/cat');
                    alert('Đã sửa thành công'); // ở đây thầy ạ, e dựa vào đường dẫn json và dựa vào mockapi thầy ạ? em lu' vua` thoi
                    window.location.reload();
                })
            })
        })
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Tên danh mục</label>
                    <input type="text" className="form-control" name="title" defaultValue={cate.title} ref={register({ required: true, maxLength: 20 })} />
                    {errors.title && errors.title.type === "required" && <span className="alert-danger">Nhập tên danh mục</span>}
                    {errors.title  && errors.title.type === "maxLength" && <span className="alert-danger">Tối đa 20 ký tự</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Nội dung ngắn</label>
                    <textarea class="form-control" name="description" defaultValue={cate.description} ref={register({required: true, maxLength: 160})}></textarea>
                    {errors.description && errors.description.type === "required" && <span className="alert-danger">Nhập nội dung ngắn</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Ảnh</label>
                    <input type="file" className="form-control" name="anh" defaultValue={cate.image} ref={register({ required: true, pattern: {
                        value: /\.(jpe?g|png|gif)/
                    }})} />
                    <img src={cate.anh} width="200"></img>
                    {errors.image && errors.image.type === "required" && <span className="alert-danger">Nhập ảnh</span>}
                    {errors.image && errors.image.type === "pattern" && <span className="alert-danger">Chỉ được phép nhập ảnh gồm .jpg, .jpeg, png, gif</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

EditCate.propTypes = {

}

export default EditCate
