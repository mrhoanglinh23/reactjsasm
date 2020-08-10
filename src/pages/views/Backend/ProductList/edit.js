import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import firebase from '../../../../firebase'
import { useParams, useHistory } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';

const EditProduct = (props) => {
    const {id} = useParams();
    const[products, setProducts] = useState([]);
    const[cate, setCate] = useState([]);
    const [desc, setDesc] = useState("");
    const {register, handleSubmit, errors} = useForm();
    let history = useHistory();

    useEffect(()=>{
        Axios.get(`http://localhost:8000/products/${id}`)
          .then(res=>{
              console.log(res)
              setProducts(res.data)
          })
      },[])
    useEffect(()=>{
        Axios.get(`http://localhost:8000/cate`)
          .then(res=>{
              console.log(res)
              setCate(res.data)
          })
      },[])  
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
                Axios.put(`http://localhost:8000/products/${id}`, newObj).then(res => { // cai duong dan nay em lay dau ra the http://localhost:8000/cate/${id}/products
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
                    <input type="text" className="form-control" name="namesp" defaultValue={products.namesp}  ref={register({ required: true, maxLength: 20 })} />
                    {errors.namesp && errors.namesp.type === "required" && <span className="alert-danger">Nhập tên sản phẩm</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Danh mục đã chọn: </label>   
                </div>
                <div className="form-group">
                    <label htmlFor="email">Danh mục</label>
                    <select>
                        {cate.map((cat, index) => (
                            <option value={cat.id} key={index}>{cat.title}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Ảnh</label>
                    <input type="file" 
                    className="form-control" 
                    name="anh" ref={register({required: true})}/>
                    <img src={products.anh} width="200"></img>
                    {errors.anh && errors.anh.type === "required" && <span className="alert-danger">Chọn ảnh</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Regular Price</label>
                    <input type="number" className="form-control" name="oldprice" defaultValue={products.oldprice} ref={register({required: true})} />
                    {errors.oldprice && errors.oldprice.type === "required" && <span className="alert-danger">Nhập giá thường</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Sale Price</label>
                    <input type="number" className="form-control" name="newprice" defaultValue={products.newprice} ref={register({required: true})} />
                    {errors.newprice && errors.newprice.type === "required" && <span className="alert-danger">Nhập giá sale</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Nội dung</label>
                  <textarea class="form-control" name="noidung" rows="1" defaultValue={products.noidung} ref={register({required: true})}></textarea>
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
                        value={products.desc}
                        onEditorChange={handleEditorChange}
                    />
                  {errors.desc && errors.desc.type === "required" && <span className="alert-danger">Nhập nội dung ngắn</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

EditProduct.propTypes = {

}

export default EditProduct

