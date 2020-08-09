import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const EditProduct = (props) => {
    const {id} = useParams();
    const[products, setProducts] = useState([]);
    const[cate, setCate] = useState([]);
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
    const onSubmit = event => {
        Axios.put(`http://localhost:8000/products/${id}`, event).then(res => {
            console.log(res);
            history.push("/admin/products")
            alert('Đã sửa thành công');  
        })
    }
    
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                    <label htmlFor="email">Tên SP</label>
                    <input type="text" className="form-control" name="namesp" defaultValue={products.namesp}  ref={register({ required: true, maxLength: 20 })} />
                    {errors.namesp && errors.namesp.type === "required" && (
                        <span className="bg-gradient-danger">Nhập tên sản phẩm</span>
                    )}
                    {errors.namesp && errors.namesp.type === "maxLength" && (
                        <span className="bg-gradient-danger">Tối đa 30 ký tự</span>
                    )}
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
                    <input type="text" className="form-control" name="anh" />
                    <img src={products.anh} width="200"></img>
                    {errors.anh && <span className="bg-danger">Chọn ảnh</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Old Price</label>
                    <input type="number" className="form-control" name="oldprice" defaultValue={products.oldprice} ref={register({required: true})} />
                    {errors.oldprice && <span className="bg-danger">Nhập giá thường</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">New Price</label>
                    <input type="number" className="form-control" name="newprice" defaultValue={products.newprice} ref={register({required: true})} />
                    {errors.newprice && <span className="bg-danger">Nhập giá mới</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Nội dung</label>
                  <textarea class="form-control" name="noidung" rows="1" defaultValue={products.noidung} ref={register({required: true})}></textarea>
                  {errors.noidung && <span className="bg-danger">Nhập nội dung ngắn</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Description</label>
                  <textarea className="form-control" name="description" cols="80" rows="10" defaultValue={products.description} ref={register({required: true})}></textarea>
                  {errors.description && <span className="bg-danger">Nhập nội dung</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

EditProduct.propTypes = {

}

export default EditProduct

