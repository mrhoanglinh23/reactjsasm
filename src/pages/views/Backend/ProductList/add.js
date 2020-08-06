import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios';
import {useHistory} from 'react-router-dom'
import { useForm } from 'react-hook-form';

const AddProduct = ({cate}) => {
    const {register, handleSubmit, errors} = useForm();
    let history = useHistory();
    useEffect(() => {
        Axios.get(`http://localhost:8000/cate`).then(result => {
            console.log(result);
        })
    }, []);

    const onSubmit = data => {
        console.log(data);
        Axios.post('http://localhost:8000/products', data).then(res => {
            console.log(res);
            history.push("/admin/products")
            alert('Đã thêm thành công');
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
                    <select className="form-inline" name="cateid">
                        {cate.map((cat, index) => (
                            <option value={cat.id} key={index}>{cat.title}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Ảnh</label>
                    <input type="text" 
                    className="form-control" 
                    name="anh" 
                    ref={
                        register({
                          required: true,  
                          pattern: {
                            value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/
                          }
                        })
                      } />
                    {errors.anh && errors.anh.type === "required" && <span className="alert-danger">Nhập ảnh</span>}
                    {errors.anh && errors.anh.type === "pattern" && <span className="alert-danger">Nhập đường dẫn ảnh</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Old Price</label>
                    <input type="number" className="form-control" name="oldprice" ref={register({required: true})} />
                    {errors.oldprice && errors.oldprice.type === "required" && <span className="alert-danger">Nhập giá thường</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">New Price</label>
                    <input type="number" className="form-control" name="newprice" ref={register({required: true})} />
                    {errors.newprice && errors.newprice.type === "required" && <span className="alert-danger">Nhập giá mới</span>}
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