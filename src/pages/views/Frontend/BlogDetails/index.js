import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const BlogDetails = props => {
    const {id} = useParams();
    const[blog, setBlog] = useState([]);
    useEffect(() =>{
        Axios.get(`http://localhost:8000/baiviet/${id}`)
          .then(res=>{
            setBlog(res.data)
          })
      },[id])
    return (
        <div>
            <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 mb-0"><Link to={`/`}>Home</Link><span className="mx-2 mb-0">/</span> <strong className="text-black">Blog</strong></div>
            </div>
                <div className="card text-black">
                    <img src={blog.image} alt="" width="900" style={{marginRight: '30px'}}/>
                    <div className="card-body">
                    <h4 className="card-title">{blog.title}</h4>
                    <p className="card-text">{blog.desc}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default BlogDetails
