import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Axios from 'axios';
import {Editor} from '@tinymce/tinymce-react'
import firebase from '../../../../firebase'
import { useHistory, useParams } from 'react-router-dom';

const EditBlog = (props) => {
    const {id} = useParams();
    const[cate, setCate] = useState([]);
    const[blog, setBlog] = useState([]);
    const [desc, setDesc] = useState("");
    let history = useHistory();
    const {register, handleSubmit, errors} = useForm();
    useEffect(()=>{
      Axios.get(`http://localhost:8000/baiviet/${id}`)
        .then(res=>{
            console.log(res)
            setBlog(res.data)
        })
    },[])
    const onSubmit = data => {
      let file = data.image[0];
        let storageRef = firebase.storage().ref(`blogimages/${file.name}`);
        storageRef.put(file).then(function(){
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                const newObj = {
                    ...data,
                    desc,
                    image: url
                }
                Axios.put(`http://localhost:8000/baiviet/${id}`, newObj).then(res => {
                    console.log(res);
                    history.push("/admin/baiviet") 
                    alert('Đã sửa thành công');
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
                    <label htmlFor="email">Tiêu đề</label>
                    <input type="text" className="form-control" name="title" defaultValue={blog.title} ref={register({required: true, maxLength: 160})} />
                    {errors.title && errors.title.type === "required" && <span className="alert-danger">Nhập tiêu đề</span>}
                    {errors.title && errors.title.type === "maxLength" && <span className="alert-danger">Tối đa 160 ký tự</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Nội dung</label>
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
                        value={blog.desc}
                        onEditorChange={handleEditorChange}
                    />
                  {errors.description && errors.description.type === "required" && <span className="alert-danger">Nhập nội dung</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Ảnh</label>
                  <input type="file" className="form-control" name="image" ref={register({required: true})} />
                  <img src={blog.image} width="150"></img>
                  {errors.image && errors.image.type === "required" && <span className="alert-danger">Chọn ảnh</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="">Ngày đăng</label>
                  <input type="date" className="form-control" name="ngaydang" defaultValue={blog.ngaydang} ref={register({required: true})} />
                  {errors.ngaydang && errors.ngaydang.type === "required" && <span className="alert-danger">Nhập ngày đăng</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default EditBlog
