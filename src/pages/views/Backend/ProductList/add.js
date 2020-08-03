import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios';
import {useHistory} from 'react-router-dom'
import { useForm } from 'react-hook-form';

const AddProduct = ({cate}) => {
    const {register, handleSubmit, errors} = useForm();
    let history = useHistory();
    useEffect(() => {
        Axios.get(`https://5f26d9ae0824d8001655ec71.mockapi.io/cate`).then(result => {
            console.log(result);
        })
    }, []);

    const onSubmit = event => {
        Axios.post('https://5f26d9ae0824d8001655ec71.mockapi.io/products', event).then(res => {
            console.log(res);
            history.push("/admin/products")
        })
    }
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
                        <span className="bg-gradient-danger">Tối đa 10 ký tự</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Danh mục</label>
                    
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

AddProduct.propTypes = {

}

export default AddProduct
