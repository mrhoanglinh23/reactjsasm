import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const ProductList = (props) => {
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
        <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>
        {/* DataTales Example */}
        <Link to="/admin/products/add"><button className="btn btn-primary">Add</button></Link>
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
                    <th>Tên sp</th>
                    <th>Ảnh</th>
                    <th>Giá cũ</th>
                    <th>Giá mới</th>
                    <th>Tiêu đề</th>
                    <th>Nội dung</th>
                  </tr>
                </thead>
                <tbody>
                {props.products.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.namesp}</td>
                    <td><img src></img></td>
                    <td>${product.oldprice}</td>
                    <td>${product.newprice}</td>
                    <td>{product.noidung}</td>
                    <td>{product.description}</td>
                    <td><Link to={`/admin/products/edit/${product.id}`}><button className="btn btn-primary btn-sm" >Sửa</button></Link></td>
                    <td><button className="btn btn-primary btn-sm" onClick={() => props.deleteProducts(product.id)}> Xóa</button></td>
                  </tr> 
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
        // không chia ra routẻ riêng hả sao phần hiểu thị product list k fetch data ra à
        /// phần app js chỉ viết mỗi router thôi ??

    )
}

export default ProductList
