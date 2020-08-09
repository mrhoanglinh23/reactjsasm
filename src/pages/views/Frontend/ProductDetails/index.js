import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = (props) => {
    const {id} = useParams();
    const[products, setProducts] = useState([]);
    useEffect(() =>{
        Axios.get(`http://localhost:8000/products/${id}`)
          .then(res=>{
              setProducts(res.data)
          })
      },[id])
    return (
        <div>
            <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Tank Top T-Shirt</strong></div>
            </div>
          </div>
        </div>  
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="images/cloth_1.jpg" alt="Image" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h2 className="text-black">{products.namesp}</h2>
                <p>{products.noidung}</p>
                <p><strong className="text-primary h4">Regular Price <s>${products.oldprice}</s></strong></p>
                <p><strong className="text-primary h4">Sale Price: ${products.newprice}</strong></p>
                
                <div className="mb-5">
                  <div className="input-group mb-3" style={{maxWidth: '120px'}}>
                    <div className="input-group-prepend">
                      <button className="btn btn-outline-primary js-btn-minus" type="button">−</button>
                    </div>
                    <input type="text" className="form-control text-center" defaultValue={1} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    <div className="input-group-append">
                      <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                    </div>
                  </div>
                </div>
                <p><Link to={`/cart`} className="buy-now btn btn-sm btn-primary">Add To Cart</Link></p>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section block-3 site-blocks-2 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 site-section-heading text-center pt-4">
                <h2>Description</h2>
              </div>
              <div className="col-md-7 site-section-heading text-center pt-4">
                <p>{products.description}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="nonloop-block-3 owl-carousel">
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default ProductDetails
