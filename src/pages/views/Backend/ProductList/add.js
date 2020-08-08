import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios';
import CKEditor from '@ckeditor/ckeditor5-react';
import firebase from '../../../../firebase'
import {useHistory, useParams} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { storage } from 'firebase';

const AddProduct = ({cate}) => {
    const {register, handleSubmit, errors} = useForm();
    const {id} = useParams();
    let history = useHistory();
    useEffect(() => {
        Axios.get(`http://localhost:8000/cate`).then(result => {
            console.log(result);
        })
    }, []);

    const onSubmit = (data) => {
        let file = data.anh[0];
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        storageRef.put(file).then(function(){
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                Axios.post(`http://localhost:8000/cate/${id}/products`, data).then(res => {
                    history.push('/admin/products');
                    alert('Đã thêm thành công');
                    window.location.reload();
                })
            })
        })
    }    
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Tên SP</label>
                    <input type="text" className="form-control" name="namesp" ref={register({required: true, maxLength: 20})} />
                    {errors.namesp && errors.namesp.type === "required" && <span className="alert-danger">Nhập tên sản phẩm</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Danh mục</label>
                    <select className="form-inline" name="catename">
                        <option>Không có danh mục</option>
                        {cate.map((cat, index) => (      
                            <option value={cat.name} key={index}>{cat.title}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Ảnh</label>
                    <input type="file" 
                    className="form-control" 
                    name="anh" 
                    ref={
                        register({
                          required: true,  
                        })
                      } />
                    {errors.anh && errors.anh.type === "required" && <span className="alert-danger">Nhập ảnh</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Regular Price</label>
                    <input type="number" className="form-control" name="oldprice" ref={register({required: true})} />
                    {errors.oldprice && errors.oldprice.type === "required" && <span className="alert-danger">Nhập giá thường</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Sale Price</label>
                    <input type="number" className="form-control" name="newprice" ref={register({required: true})} />
                    {errors.newprice && errors.newprice.type === "required" && <span className="alert-danger">Nhập giảm giá</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Nội dung ngắn</label>
                  <textarea class="form-control" name="noidung" rows="1" ref={register({required: true})}></textarea>
                  {errors.noidung && errors.noidung.type === "required" && <span className="alert-danger">Nhập nội dung ngắn</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Description</label>
                  <textarea className="form-control" name="description" cols="80" rows="10" ref={register({required: true})}></textarea>
                  {errors.description && errors.description.type === "required" && <span className="alert-danger">Nhập nội dung</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct