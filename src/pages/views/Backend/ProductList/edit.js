import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const EditProduct = ({cate, products}) => {
    const { id } = useParams();
    let history = useHistory();
    const {register, handleSubmit, errors, setValue} = useForm();
    const onSubmit = event => {
        Axios.post('http://localhost:8000/cate', event).then(res => {
            console.log(res);
            history.push("/admin/cat") 
        })
    }
    useEffect(() => {
       Axios.get(`http://localhost:8000/products/${id}`).then(res => {
            setValue("id", res.event.id);
            setValue("title", res.event.title);
       }) 
    }, ([id]))
    
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                    <label htmlFor="email">Tên SP</label>
                    <input type="text" className="form-control" name="namesp" ref={register({ required: true, maxLength: 30 })} />
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
                    <select className="form-inline">
                        {cate.map((cat, index) => (
                            <option key={index}>{cat.title}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Ảnh</label>
                    <input type="file" className="form-control" name="anh" />
                    {errors.anh && <span className="bg-danger">Chọn ảnh</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Old Price</label>
                    <input type="number" className="form-control" name="oldprice" ref={register({required: true})} />
                    {errors.oldprice && <span className="bg-danger">Nhập giá thường</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">New Price</label>
                    <input type="number" className="form-control" name="newprice" ref={register({required: true})} />
                    {errors.newprice && <span className="bg-danger">Nhập giá mới</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Nội dung</label>
                  <textarea class="form-control" name="noidung" rows="1" ref={register({required: true})}></textarea>
                  {errors.noidung && <span className="bg-danger">Nhập nội dung ngắn</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Description</label>
                  <textarea className="ckeditor" name="description" cols="80" rows="10" ref={register({required: true})}></textarea>
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

