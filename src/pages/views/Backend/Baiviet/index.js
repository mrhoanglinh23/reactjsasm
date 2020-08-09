import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios';

const Baivietlist = (props) => {
    const {id} = useParams();
      const removeBlog = id => {
        let remove = window.confirm('Are you sure?');
        Axios.delete(`http://localhost:8000/baiviet/${id}`).then(res => {
          window.location.reload();
        })
      }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
        <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>
        {/* DataTales Example */}
        <Link to="/admin/baiviet/add"><button className="btn btn-primary">Add</button></Link>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
          </div>
          
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                  <tr>
                  <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Date Published</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Date Published</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                  </tr>
                </tfoot>
                <tbody>
                {props.baiviet.map((blog, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{blog.title}</td>
                    <td>{blog.description}</td>
                    <td><img src={blog.anh}></img></td>
                    <td>{blog.ngaydang}</td>
                    <td><Link to={`/admin/baiviet/edit/${blog.id}`}><button className="btn btn-primary btn-sm">Sửa</button></Link></td>
                    <td><button className="btn btn-primary btn-sm" onClick={() => removeBlog(blog.id)}> Xóa</button></td>
                  </tr>            
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
    )
}

Baivietlist.propTypes = {

}

export default Baivietlist
