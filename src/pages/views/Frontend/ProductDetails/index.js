import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useParams } from 'react-router-dom';

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
                <p><strong className="text-primary h4">$50.00</strong></p>
                <div className="mb-1 d-flex">
                  <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top: '-2px', position: 'relative'}}><input type="radio" id="option-sm" name="shop-sizes" /></span> <span className="d-inline-block text-black">Small</span>
                  </label>
                  <label htmlFor="option-md" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top: '-2px', position: 'relative'}}><input type="radio" id="option-md" name="shop-sizes" /></span> <span className="d-inline-block text-black">Medium</span>
                  </label>
                  <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top: '-2px', position: 'relative'}}><input type="radio" id="option-lg" name="shop-sizes" /></span> <span className="d-inline-block text-black">Large</span>
                  </label>
                  <label htmlFor="option-xl" className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{top: '-2px', position: 'relative'}}><input type="radio" id="option-xl" name="shop-sizes" /></span> <span className="d-inline-block text-black"> Extra Large</span>
                  </label>
                </div>
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
                <p><a href="cart.html" className="buy-now btn btn-sm btn-primary">Add To Cart</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section block-3 site-blocks-2 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 site-section-heading text-center pt-4">
                <h2>Featured Products</h2>
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
