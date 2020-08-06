import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditCate = (props) => {
    const {id} = useParams();
    const[cate, setCate] = useState([]);
    const {register, handleSubmit, errors} = useForm();
    let history = useHistory();
    useEffect(()=>{
        Axios.get(`http://localhost:8000/cate/${id}`)
          .then(res=>{
              console.log(res)
              setCate(res.data)
          })
      },[])
    const onSubmit = event => {
        Axios.put(`http://localhost:8000/cate/${id}`, event).then(res => {
            console.log(res);
            history.push("/admin/cat")
            alert('Đã sửa thành công'); 
        })
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Tên danh mục</label>
                    <input type="text" className="form-control"  name="title" defaultValue={cate.title} ref={register({ required: true, maxLength: 20 })} />
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
