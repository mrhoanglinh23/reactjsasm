import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import Axios from 'axios';

const CateList = ({cate}) => {
    const { id } = useParams();
    let history = useHistory();
    useEffect(() => {
        Axios.get(`https://5f26d9ae0824d8001655ec71.mockapi.io/cate/${id}`).then(result => {
            console.log(result);
        })
    }, [id]);
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
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th></th>
                    <th></th>
                  </tr>
                </tfoot>
                <tbody>
                {cate.map((cat, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{cat.title}</td>
                    <td><Link to="/admin/cat/edit"><button className="btn btn-primary btn-sm" >Sửa</button></Link></td>
                    <td><button className="btn btn-primary btn-sm" >Xóa</button></td>
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
