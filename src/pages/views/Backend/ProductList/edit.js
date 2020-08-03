import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';

const EditProduct = ({products}) => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = event => {
        
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Tên SP</label>
                    <input type="text" className="form-control" name="namesp" ref={register({ required: true, maxLength: 30 })} />
                    {errors.namesp && errors.namesp.type === "required" && (
                        <span role="alert">Nhập tên sản phẩm</span>
                    )}
                    {errors.namesp && errors.namesp.type === "maxLength" && (
                        <span role="alert">Tối đa 10 ký tự</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Danh mục</label>
                    {/* {cate.map((cat, index) => (
                        <select key={index}>
                            <option>{cat.title}</option>
                        </select>
                    ))} */}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Ảnh</label>
                    <input type="file" className="form-control" name="anh" />
                    {errors.anh && <span>Chọn ảnh</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Price</label>
                    <input type="number" className="form-control" name="price" ref={register({required: true})} />
                    {errors.price && <span>Nhập giá thường</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Price</label>
                    <input type="number" className="form-control" name="price" ref={register({required: true})} />
                    {errors.price && <span>Nhập giá mới</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Nội dung</label>
                  <texarea name = "noidung" class="ckeditor"> </texarea>
                  {errors.noidung && <span>Nhập nội dung</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

EditProduct.propTypes = {

}

export default EditProduct

