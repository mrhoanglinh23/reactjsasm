import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetails = props => {
    const {id} = useParams();
    const[baiviet, setBaiviet] = useState([]);
    useEffect(() =>{
        Axios.get(`http://localhost:8000/baiviet/${id}`)
          .then(res=>{
              setBaiviet(res.data)
          })
      },[id])
    return (
        <div>
            <div className="container">
                <h2>{baiviet.title}</h2>
            </div>
        </div>
    )
}

BlogDetails.propTypes = {

}

export default BlogDetails
