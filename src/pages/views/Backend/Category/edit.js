import React from 'react'
import PropTypes from 'prop-types'
import CateList from '.';
import { useForm } from 'react-hook-form';

const EditCate = ({cate}) => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = event => {
        
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Tên danh mục</label>
                    <input type="text" className="form-control" name="title" value={cate.title} ref={register({required: true})} />
                    {errors.title && <span>Nhập tên danh mục</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

EditCate.propTypes = {

}

export default EditCate
