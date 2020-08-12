import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Home = (props) => {
  const {id} = useParams();
    return (
        <div>
        <div className="site-blocks-cover" style={{backgroundImage: 'url(images/hero_1.jpg)'}} data-aos="fade">
          <div className="container">
            <div className="row align-items-start align-items-md-center justify-content-end">
              <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
                <h1 className="mb-2">Finding Your Perfect Shoes</h1>
                <div className="intro-text text-center text-md-left">
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
                  <p>
                    <a href="#" className="btn btn-sm btn-primary">Shop Now</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section site-section-sm site-blocks-1">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay>
                <div className="icon mr-4 align-self-start">
                  <span className="icon-truck" />
                </div>
                <div className="text">
                  <h2 className="text-uppercase">Free Shipping</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon mr-4 align-self-start">
                  <span className="icon-refresh2" />
                </div>
                <div className="text">
                  <h2 className="text-uppercase">Free Returns</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="icon mr-4 align-self-start">
                  <span className="icon-help" />
                </div>
                <div className="text">
                  <h2 className="text-uppercase">Customer Support</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section site-blocks-2">
          <div className="container">
            <div className="row">
              {props.cate.map((cat) => (
                <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay>
                <a className="block-2-item" href="#">
                  <figure className="image">
                    <img src={cat.anh} alt="" className="img-fluid" width="500" height="150"/>
                  </figure>
                  <div className="text">
                    <span className="text-uppercase" >Collections</span>
                    <h3 style={{color: 'black', fontSize: 18}}>{cat.title}</h3>
                  </div>
                </a>
              </div>
              ))}
              
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

                  {props.products.map((product) => (
                    <div className="item">
                    <div className="block-4 text-center">
                      <figure className="block-4-image">
                        <br />
                        <img src={product.anh} width="100" alt="Image placeholder" className="img-fluid" />
                      </figure>
                      <div className="block-4-text p-4">
                        <h3><Link to={`/details/${id}`}>{product.namesp}</Link></h3>
                        <p className="mb-0">{product.noidung}</p>
                        <p className="text-primary font-weight-bold"><s>${product.oldprice}</s></p>
                        <p className="text-primary font-weight-bold">${product.newprice}</p>
                      </div>
                    </div>
                  </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home
