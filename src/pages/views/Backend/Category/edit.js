import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Axios from 'axios';
import firebase from '../../../../firebase'
import { useHistory, useParams } from 'react-router-dom';

const EditCate = (props) => {
    const {id} = useParams();
    const[cate, setCate] = useState([]);
    const [url, setURL] = useState("");
    const {register, handleSubmit, errors} = useForm();
    let history = useHistory();
    useEffect(()=>{
        Axios.get(`http://localhost:8000/cate/${id}`)
          .then(res=>{
              console.log(res)
              setCate(res.data)
          })
      },[])
      const onSubmit = data => {
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`cateimages/${file.name}`);
        storageRef.put(file).then(function(){
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                Axios.post(`http://localhost:8000/cate/${id}`, data).then(res => {
                    console.log(res.data);
                    setURL(url);
                    history.push("/admin/cat"); 
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
                    <input type="file" className="form-control" name="image"  />
                    <img src={cate.image} width="200"></img>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

EditCate.propTypes = {

}

export default EditCate
