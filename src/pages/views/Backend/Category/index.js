import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import Axios from 'axios';

const CateList = (props) => {
    const { id } = useParams();
    let history = useHistory();
    const removeCate = id => {
      let remove = window.confirm('Are you sure?');
      Axios.delete(`http://localhost:8000/cate/${id}`).then(res => {
        history.push('/admin/cat');
        alert('Đã xóa thành công');
        window.location.reload();
      })
    }
    const [cate, setCate] = useState();
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
        <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>
        {/* DataTales Example */}
        <Link to="/admin/cat/add"><button className="btn btn-primary">Add</button></Link>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
          </div>
          
          <div className="card-body">
            <div className="table-responsive">
              <input type="text" name="search" ></input>
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Ảnh</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Ảnh</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                  </tr>
                </tfoot>
                <tbody>
                {props.cate.map((cat, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{cat.title}</td>
                    <td>{cat.description}</td>
                    <td><img src={cat.image}></img></td>
                    <td><Link to={`/admin/cat/edit/${cat.id}`}><button className="btn btn-primary btn-sm" >Sửa</button></Link></td>
                    <td><button className="btn btn-primary btn-sm" onClick={() => removeCate(cat.id)}>Xóa</button></td>
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

CateList.propTypes = {

}

export default CateList
