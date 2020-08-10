import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import firebase from '../../../../firebase'
import {useHistory, useParams} from 'react-router-dom'
import { useForm } from 'react-hook-form';

const AddProduct = (props) => {
    const {register, handleSubmit, errors} = useForm();
    const [cate, setCate] = useState(); 
    const [desc, setDesc] = useState("");
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
                const newObj = {
                    id: Math.random().toString(36).substr(2,9),
                    ...data,
                    desc,
                    anh: url
                }
                Axios.post(`http://localhost:8000/products`, newObj).then(res => { // cai duong dan nay em lay dau ra the http://localhost:8000/cate/${id}/products
                    console.log(res.data)
                    history.push('/admin/products');
                    alert('Đã thêm thành công'); // ở đây thầy ạ, e dựa vào đường dẫn json và dựa vào mockapi thầy ạ? em lu' vua` thoi
                    window.location.reload();
                })
            })
        })
    }
    const handleEditorChange = (content) => {
        setDesc(content);
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

                        {props.cate.map((cat, index) => (      
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
                  <Editor
                        init={{
                            height: 200,
                            images_upload_url: 'postAcceptor.php',
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor |  image link\
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help',

                        }}
                        ref={register({required: true})}
                        onEditorChange={handleEditorChange}
                    />
                  {errors.desc && errors.desc.type === "required" && <span className="alert-danger">Nhập nội dung</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct