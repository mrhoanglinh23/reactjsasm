import React from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios';
import { useForm } from 'react-hook-form';

const AddProduct = (props) => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = event => {
        Axios.post('https://5f26d9ae0824d8001655ec71.mockapi.io/products', event).then(res => {
            console.log(res);
            props.history.push("/admin/cate")
        })
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Tên SP</label>
                    <input type="text" className="form-control" name="namesp" ref={register({required: true})} />
                    {errors.namesp && <span>Nhập tên danh mục</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Ảnh</label>
                    <input type="file" className="form-control" name="anh" />
                    {errors.anh && <span>Chọn ảnh</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Price</label>
                    <input type="number" className="form-control" name="price" ref={register({required: true})} />
                    {errors.price && <span>Nhập giá</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Nội dung</label>
                  <textarea className="form-control" name="noidung" rows="3"></textarea>
                  {errors.noidung && <span>Nhập nội dung</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct
